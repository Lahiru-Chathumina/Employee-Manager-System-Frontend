import { Component } from '@angular/core';
import { ListEmComponent } from "../list-em/list-em.component";
import { SearchEmComponent } from "../search-em/search-em.component";
import { AddEmComponent } from "../add-em/add-em.component";

@Component({
  selector: 'app-home',
  imports: [ListEmComponent, SearchEmComponent, AddEmComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
