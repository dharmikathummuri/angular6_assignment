import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUser } from "../app/user";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    console.log("in hereeee");
    return this.http.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
  }
}
