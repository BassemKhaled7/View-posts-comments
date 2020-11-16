import { ViewPostsService } from './../view-posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
id:any;
post:any;
commentsContainer:any;
  constructor(private route:ActivatedRoute , private ViewPostsService:ViewPostsService
    ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.ViewPostsService.getPost(this.id).subscribe((thePost)=>{
      this.post=thePost;
    })
    this.ViewPostsService.getPostComment(this.id).subscribe((comments)=>{
      this.commentsContainer=comments;
    
    
      })



  }

}
