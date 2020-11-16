import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'posts'  , component:PostsComponent },

  { path:'comments/:id'  , component:CommentsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
