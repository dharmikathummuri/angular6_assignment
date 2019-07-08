import { Component, OnInit } from "@angular/core";
import { UserService } from "src/services/user.service";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"]
})
export class ListUsersComponent implements OnInit {
  public users = [];
  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getUsers().subscribe(data => (this.users = data));
  }
}
