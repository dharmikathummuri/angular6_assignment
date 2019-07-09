import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { PostService } from "src/services/post.service";

@Component({
  selector: "app-display-post",
  templateUrl: "./display-post.component.html",
  styleUrls: ["./display-post.component.scss"]
})
export class DisplayPostComponent implements OnInit {
  userPost = {};
  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const post_id = this._route.snapshot.paramMap.get("id");
    this._postService
      .getPostDetail(post_id)
      .subscribe(data => (this.userPost = data));
  }

  goBack() {
    this.location.back();
  }
}
