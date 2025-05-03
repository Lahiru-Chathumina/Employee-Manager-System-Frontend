import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { em } from '../../model/em';
import { AddEmComponent } from "../add-em/add-em.component";
import { CommonModule } from '@angular/common';
import { employeeservices } from '../../service/employeeservice';

@Component({
  selector: 'app-list-em',
  imports: [AddEmComponent, CommonModule],
  templateUrl: './list-em.component.html',
  styleUrls: ['./list-em.component.css']
})
export class ListEmComponent implements OnInit {

  emlist: em[] = [];

  constructor(private http: HttpClient, private emplyeeservices: employeeservices) { }

  ngOnInit() {
    this.loadEmployee(); 
  }

  loadEmployee() {
    this.emplyeeservices.loademployee().subscribe((emlist: em[]) => {
      this.emlist = emlist;
    });
  }

  deleteEm(id: any) {
    this.emplyeeservices.deleteEm(id).subscribe(() => {
      this.emlist = this.emlist.filter(employee => employee.id !== id);
    });
  }
}
