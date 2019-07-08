import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListUsersComponent } from "./users/list-users.component";
import { ListPostsComponent } from "./users/list-posts.component";

const routes: Routes = [
  {
    path: "list-users",
    component: ListUsersComponent
  },
  {
    path: "list-posts",
    component: ListPostsComponent
  },
  { path: "", redirectTo: "list-users", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
