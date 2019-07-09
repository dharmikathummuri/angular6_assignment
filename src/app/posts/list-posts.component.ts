import { Component, OnInit } from "@angular/core";
import { PostService } from "src/services/post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-posts",
  templateUrl: "./list-posts.component.html",
  styleUrls: ["./list-posts.component.scss"]
})
export class ListPostsComponent implements OnInit {
  public posts = [];
  config: any;
  constructor(private _postService: PostService, private _router: Router) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.posts.length
    };
  }

  ngOnInit() {
    this._postService.getPost().subscribe(data => (this.posts = data));
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  onClick(id) {
    this._router.navigateByUrl(`display-post/${id}`);
  }
}
