import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
import { NavbarComponent } from "./common/navbar/navbar.component";
import { FooterComponent } from "./common/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "./components/home/home.component";
import { DeleteEmComponent } from './components/delete-em/delete-em.component';
import { SearchEmComponent } from './components/search-em/search-em.component';
import { UpdateEmComponent } from './components/update-em/update-em.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule,  FormsModule, HomeComponent,DeleteEmComponent,SearchEmComponent,UpdateEmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})   

// RouterOutlet
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    initFlowbite();
  }
}
