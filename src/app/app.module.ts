import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { PollService } from './poll/poll.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PollComponent
  ],
  providers: [PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
