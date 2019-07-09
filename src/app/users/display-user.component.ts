import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-display-user",
  templateUrl: "./display-user.component.html",
  styleUrls: ["./display-user.component.scss"]
})
export class DisplayUserComponent implements OnInit {
  private user;
  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const user_id = this._route.snapshot.paramMap.get("id");

    this._userService.getUserDetail(user_id).subscribe(data => {
      this.user = data;
    });
  }
  goBack() {
    this.location.back();
  }
}
