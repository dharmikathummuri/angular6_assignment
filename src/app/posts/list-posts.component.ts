import { Component, OnInit } from "@angular/core";
import { PostService } from "src/services/post.service";

@Component({
  selector: "app-list-posts",
  templateUrl: "./list-posts.component.html",
  styleUrls: ["./list-posts.component.scss"]
})
export class ListPostsComponent implements OnInit {
  public posts = [];

  constructor(private _postService: PostService) {}

  ngOnInit() {
    this._postService.getPost().subscribe(data => (this.posts = data));
  }
}
