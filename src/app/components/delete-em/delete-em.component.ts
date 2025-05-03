import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { employeeservices } from '../../service/employeeservice';
import { em } from '../../model/em';
@Component({
  selector: 'app-delete-em',
  imports: [],
  templateUrl: './delete-em.component.html',
  styleUrl: './delete-em.component.css'
})
export class DeleteEmComponent {
  selectedId: any;

  constructor(private http: HttpClient,private employeeservices:employeeservices) {}

  setDeleteId(id: any) {
    this.selectedId = id;
  }

  confirmDelete(id:any) {
    this.employeeservices.deleteEm(id).subscribe(()=>{
      console.log('Employee deleted');

    })
  }
}
