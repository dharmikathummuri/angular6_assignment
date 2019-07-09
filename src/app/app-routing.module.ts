import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListUsersComponent } from "./users/list-users.component";
import { ListPostsComponent } from "./posts/list-posts.component";
import { DisplayUserComponent } from "./users/display-user.component";

const routes: Routes = [
  {
    path: "list-users",
    component: ListUsersComponent
  },
  {
    path: "list-posts",
    component: ListPostsComponent
  },
  {
    path: "display-user/:id",
    component: DisplayUserComponent
  },
  { path: "", redirectTo: "list-users", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
