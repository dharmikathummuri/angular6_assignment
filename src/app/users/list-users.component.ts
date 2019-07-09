import { Component, OnInit } from "@angular/core";
import { UserService } from "src/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"]
})
export class ListUsersComponent implements OnInit {
  public users = [];
  constructor(private _userService: UserService, private _router: Router) {}
  ngOnInit() {
    this._userService.getUsers().subscribe(data => (this.users = data));
  }
  onClick(id) {
    this._router.navigateByUrl(`display-user/${id}`);
  }
}
