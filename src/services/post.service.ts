import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPost } from "src/app/post";

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}
  getPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
