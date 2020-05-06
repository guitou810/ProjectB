import { Component } from '@angular/core';
import { HttpRequestService} from './http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpRequestService]
})
export class AppComponent {


  constructor(private HttpRequestService:HttpRequestService ){ };

  ListPost;
  Desc;
  filtre: string = "";
  ExWs(){ 
    var listpost = this.HttpRequestService.executeHTTPClientPost();
    this.ListPost = listpost;
    this.Desc=[];
  }


  InfoTitre(Titre){
    var description = this.HttpRequestService.executeHTTPClientInfo(Titre);
    this.Desc = description;
    
  }

  Filtrage(event){
    var filtre = event.srcElement.name;
    var listfiltre = this.HttpRequestService.executeHTTPClientPostFiltre(filtre);
    this.ListPost = listfiltre;
    this.Desc=[];
  }
  
}
