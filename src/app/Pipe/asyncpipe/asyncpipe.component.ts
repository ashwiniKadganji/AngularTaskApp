import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncpipeserviceService } from 'src/app/services/asyncpipeservice.service';

@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.css']
})
export class AsyncpipeComponent implements OnInit {

  // when we use $ symbol so assumes this variable is observable
  numbers$!: Observable<number[]>;

  // using promise get array data
  data$!: Promise<string[]>;

  constructor(private _asyncPipeService : AsyncpipeserviceService) { }

  ngOnInit(): void {
    this.numbers$ = this._asyncPipeService.getnumbers();
    this.data$ = this._asyncPipeService.fetchData();
  }

}
