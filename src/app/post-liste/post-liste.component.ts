import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-post-liste',
  templateUrl: './post-liste.component.html',
  styleUrls: ['./post-liste.component.css']
})
export class PostListeComponent  {

@Input() monTitre :  String;

@Output() InfoTitre = new EventEmitter();

Info(event){
  var title = event.srcElement.name ;
  this.InfoTitre.emit(title);
}

}
