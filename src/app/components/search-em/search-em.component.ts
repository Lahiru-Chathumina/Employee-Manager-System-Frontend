import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { employeeservices } from '../../service/employeeservice';
import { em } from '../../model/em';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search-em',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search-em.component.html',
  styleUrls: ['./search-em.component.css']
})
export class SearchEmComponent {
  searchTerm: string = '';
  searchResults: any[] = []; 

  constructor(private http: HttpClient, private employeeservices: employeeservices ) {}


  onSearch(id:any){
         this.employeeservices.onSearch(id).subscribe((result:em[])=>{
          this.searchResults = Array.isArray(result) ? result : [result];

           //fix problm  //  this.searchResults = Array.isArray(result) ? result : []; chang
           //this.searchResults = Array.isArray(result) ? result : [result];

 
           console.log('Search results:', result);

         })
  }

}
