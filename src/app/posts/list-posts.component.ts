import { Component, OnInit } from "@angular/core";
import { PostService } from "src/services/post.service";

@Component({
  selector: "app-list-posts",
  templateUrl: "./list-posts.component.html",
  styleUrls: ["./list-posts.component.scss"]
})
export class ListPostsComponent implements OnInit {
  public posts = [];
  config: any;
  constructor(private _postService: PostService) {
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
}
