import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostlistServiceService } from 'src/app/services/postlist-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  productId:any;
  post: any;

  constructor(private _postlistService:PostlistServiceService, private _router: ActivatedRoute) {

    console.log('Activates route is',this._router);
    this._router.params.subscribe(params =>{
      console.log('params',params);
      this.productId = params['id'];
    })
    
    this._postlistService.getPostById(this.productId).subscribe(res =>{
      console.log('get post by id',res);
      this.post = res;
    })
    
   }

  ngOnInit(): void {

  }

}
