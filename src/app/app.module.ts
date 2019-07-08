import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListUsersComponent } from "./users/list-users.component";
import { ListPostsComponent } from "./users/list-posts.component";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "src/services/user.service";

@NgModule({
  declarations: [AppComponent, ListUsersComponent, ListPostsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
