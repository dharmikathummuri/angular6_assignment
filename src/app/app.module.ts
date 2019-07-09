import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListUsersComponent } from "./users/list-users.component";
import { ListPostsComponent } from "./posts/list-posts.component";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "src/services/user.service";
import { PostService } from "src/services/post.service";
import { NgxPaginationModule } from "ngx-pagination";
import { DisplayUserComponent } from './users/display-user.component';

@NgModule({
  declarations: [AppComponent, ListUsersComponent, ListPostsComponent, DisplayUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
