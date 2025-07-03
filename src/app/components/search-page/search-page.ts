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
  searchTitle: string = '';
  searchID: string ='';

  constructor(private router: Router) {}


  onSubmit(form: NgForm): void {
    if(!form.valid) {
      alert('Form is invalid');
      return;
    }
    this.searchTitle = form.value.title || '';
    this.searchID = form.value.imdbId || '';
    console.log('Using title:',  this.searchTitle, 'Using id:', this.searchID);
    if(this.searchTitle === '' && this.searchID === '') {
      alert("Please enter valid input");
      return;
    }
    this.router.navigate(['details', this.searchTitle || 'none', this.searchID || 'none']);
    form.reset();
  }

}
