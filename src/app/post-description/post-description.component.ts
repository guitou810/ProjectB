import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.css']
})
export class PostDescriptionComponent  {

  @Input() Description :  String;

}
