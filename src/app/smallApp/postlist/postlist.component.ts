import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostlistServiceService } from 'src/app/services/postlist-service.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {


  posts: Post[] = [];
  constructor(private _postlistService: PostlistServiceService) { }

  ngOnInit(): void {

    this._postlistService.getPost().subscribe(res =>{
      console.log(res);
       this.posts = res;
    })

  }

}
