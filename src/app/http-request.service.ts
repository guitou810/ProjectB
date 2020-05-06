import { Injectable, ɵɵresolveBody } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http:HttpClient) { }

  private wsUrl:string="https://jsonplaceholder.typicode.com/posts";

  executeHTTPClientInfo(title){
    var body=[];
    this.http.get(this.wsUrl).subscribe(
      never=>{
        for(let key in never){
          if (never[key]["title"] == title){
            body.push(never[key]["body"]);
          }
        }
      },
    err=>{
      console.log('KO',err);
    }
  )
  return body;
  }

  executeHTTPClientPost(){
    var ListPost = [];
    this.http.get(this.wsUrl).subscribe(
      never=>{
        for(let key in never){
          ListPost.push(never[key]['title']);
        }
      },
      err=>{
        console.log('KO',err);
      }
    )
    return ListPost;
}

executeHTTPClientPostFiltre(fil){
  var ListFiltre = [];
  this.http.get(this.wsUrl).subscribe(
    never=>{
      for(let key in never){
        var titre = never[key]['title'];
        if (titre.includes(fil)){
        ListFiltre.push(titre);
        }
      }
    },
    err=>{
      console.log('KO',err);
    }
  )
  return ListFiltre;
}

}
