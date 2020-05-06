import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostListeComponent } from './post-liste/post-liste.component';
import { PostDescriptionComponent } from './post-description/post-description.component';
import { HttpRequestService} from './http-request.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListeComponent,
    PostDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
