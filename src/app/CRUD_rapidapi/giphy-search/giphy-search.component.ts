import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.css'],
 
})
export class GiphySearchComponent implements OnInit {

  searchText : string = '';
  gifs: any[] = [];
  rows: any[][] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;

  constructor(private _giphyService: GiphyService) { }

  ngOnInit(): void {
       this.fetchTrendingGifs();
  }

  fetchTrendingGifs(){
  const offset = (this.currentPage - 1) * this.pageSize;
  this._giphyService.getGiphy(offset, this.pageSize).subscribe(res =>{
    console.log(res);
    this.gifs = res.data;
    this.totalCount = res.pagination.total_count;
    this.organizeGifsIntoRows();
  });
 }

 searchGifs() {
  if (this.searchText.trim() !== '') {
    this._giphyService.searchGifs(this.searchText).subscribe((response: any) => {
      this.gifs = response.data.query;
      this.currentPage = 1; //reset page number when searching
    });
  } else {
    return this.fetchTrendingGifs();
  }
}



// previousPage() {
//   if (this.currentPage > 1) {
//     this.currentPage--;
//     this.fetchTrendingGifs();
//   }
// }

// nextPage() {
//   if ((this.currentPage * this.pageSize) < this.gifs.length) {
//     this.currentPage++;
//     this.fetchTrendingGifs();
//   }
// }

// get totalPages(): number {
//   return Math.ceil(this.totalCount / this.pageSize);
// }

// get totalPagesArray(): number[] {
//   return Array(this.totalPages).fill(0).map((x, i) => i + 1);
// }

// goToPage(page: number) {
//   if (page >= 1 && page <= this.totalPages) {
//     this.currentPage = page;
//     this.fetchTrendingGifs();
//   }
// }

organizeGifsIntoRows() {
  this.rows = [];
  for (let i = 0; i < this.gifs.length; i += 5) {
    this.rows.push(this.gifs.slice(i, i + 5));
  }
}

}


