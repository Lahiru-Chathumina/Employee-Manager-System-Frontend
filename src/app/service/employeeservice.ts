import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { em } from "../model/em";
import { env } from "../env/env.url"; //url
@Injectable({
    providedIn:"root" //me class eka iject karanna(depens Inject) [OKEN ONAMA THANATA ONJECT GANNA PULUWAN ME CALSS EKE]

})

export class employeeservices{

constructor(private http:HttpClient){}

    loademployee():Observable<em[]> {   //em=modelcalss
    return this.http.get<em[]>(`${env.baseurl}/Staff/get-all`);
 }   

     //get eka asinconer methana suncriber kale natte 
     // methana funtion eka calla karama ethanin 
     // asin coner karanna wenawa eka aye asin coner karanna wenawa eka 
    // naththanna  retern karanaw Observable

    onSearch(id:any):Observable<em[]>{
      return this.http.get<em[]>(`${env.baseurl}/Staff/search-by-id/${id}`);
    }

    deleteEm(id:any):Observable<em[]>{
    return this.http.delete<em[]>(`${env.baseurl}/Staff/delete/${id}`);

    }

    updateEmployee(id:any, em:em):Observable<em[]> {
        return this.http.put<em[]>(`${env.baseurl}/Staff/update/${id}`,em);
      }
      

}