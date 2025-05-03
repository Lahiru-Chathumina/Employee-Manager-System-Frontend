import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { em } from '../../model/em';
import { employeeservices } from '../../service/employeeservice';
@Component({
  selector: 'app-update-em',
  
  imports: [FormsModule,CommonModule],
  templateUrl: './update-em.component.html',
  styleUrl: './update-em.component.css'
})
export class UpdateEmComponent {
  emlist : em []=[]


  public em:any ={
    id: '', 
    name:"",
    email:"",
    addres:"",
    Salary:""

  }

constructor(private http:HttpClient , private employeeservices : employeeservices){
 
  }

  updateEm(){
    this.employeeservices.updateEmployee(this.em.id ,this.em).subscribe((response :em[])=>{
      console.log('Employee updated:', response);

    })
  }

}
