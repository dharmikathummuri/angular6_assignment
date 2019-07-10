import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListUsersComponent } from "./users/list-users.component";
import { ListPostsComponent } from "./posts/list-posts.component";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "src/services/user.service";
import { PostService } from "src/services/post.service";
import { NgxPaginationModule } from "ngx-pagination";
import { DisplayUserComponent } from "./users/display-user.component";
import { DisplayPostComponent } from "./posts/display-post.component";

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ListPostsComponent,
    DisplayUserComponent,
    DisplayPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
