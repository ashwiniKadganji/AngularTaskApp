import { Component, OnInit } from '@angular/core';
import { WikipediaService } from 'src/app/services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {
  searchText: string = '';
  searchResults: any[] = [];

  constructor(private _wikipediaService:WikipediaService) { }

  ngOnInit(): void {
    this.search();
  }
  search(): void {
    this._wikipediaService.search(this.searchText).subscribe((research: any) => {
      this.searchResults = research.query.search;
      console.log(research);

      
      
    });
  }

  // Write a helper function to strip HTML tags from the text. This function will use a regular expression to remove any HTML tags.
  stripHtmlTags(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }
  
}




