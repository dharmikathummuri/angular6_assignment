import { Component, OnInit } from "@angular/core";
import { PostService } from "src/services/post.service";
import { Router } from "@angular/router";
import { IPost } from "../interfaces/post";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-list-posts",
  templateUrl: "./list-posts.component.html",
  styleUrls: ["./list-posts.component.scss"]
})
export class ListPostsComponent implements OnInit {
  public posts = [];
  public postData = { title: "", body: "" };
  displayForm = false;
  errorMessage = [];
  errors = false;
  success = false;
  currentid: number;
  disableButton = false;
  config: any;
  constructor(
    private _postService: PostService,
    private _router: Router,
    private http: HttpClient
  ) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.posts.length
    };
  }

  ngOnInit() {
    this._postService.getPost().subscribe(data => (this.posts = data));
  }
  clearFormData() {
    this.postData = { title: "", body: "" };
    this.errorMessage = [];
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  onClick(id) {
    this._router.navigateByUrl(`display-post/${id}`);
  }
  showForm() {
    this.displayForm = this.displayForm == true ? false : true;
  }
  validateInput(data) {
    let letters = /^[0-9a-zA-Z]+$/;
    let condition = true;
    if (data.title.length > 24 || data.body.length > 50) {
      this.errorMessage.push(
        "Please make sure that title shoul be less than 24 characters and post should be less than 50 characters!!"
      );
      condition = false;
    }
    if (!data.title.match(letters)) {
      this.errorMessage.push(
        "only enter alpha numeric values in the title box!!"
      );
      condition = false;
    }
    if (data.title.length == 0 || data.body.length == 0) {
      this.errorMessage.push("Do not submit until you will the form!!");
      condition = false;
    }
    this.errorMessage = this.errorMessage.slice(0, 3);
    return condition;
  }
  savePost(e) {
    e.preventDefault();
    const formValidated = this.validateInput(this.postData);
    if (formValidated) {
      this.http
        .post("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: this.postData.title,
            body: this.postData.body,
            userId: 1
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .subscribe(response => {
          this.success = true;
          this.errors = false;
          this.currentid = response["id"];
          this.clearFormData();
        });
    } else {
      this.disableButton = true;
      this.success = false;
      this.errors = true;
    }
  }
}
