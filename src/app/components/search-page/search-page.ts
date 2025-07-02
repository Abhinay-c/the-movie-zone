import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss'
})
export class SearchPage {

  searchType: string = 'type-title';
  searchTerm: string = '';

  constructor(private router: Router) {}


  onSearch(form: NgForm): void {
    if(!form.valid) {
      console.error('Form is invalid');
    }
    else if(this.searchType === 'type-title') {
      this.searchTerm = form.value.title;
      if (this.searchTerm) {
        console.log('Searching for title:', this.searchTerm);
        form.reset();
        this.router.navigate(['details']);
      } else {
        console.error('Search title is required');
      }
    }
    else if (this.searchType === 'type-id') {
      this.searchTerm = form.value.imdbId;
      if (this.searchTerm) {
        console.log('Searching for id:', this.searchTerm);
        form.reset();
        this.router.navigate(['details']);
      } else {
        console.error('Search id is required');
      }
    }
    // this.router.navigate(['search', searchTerm]);
  }

}
