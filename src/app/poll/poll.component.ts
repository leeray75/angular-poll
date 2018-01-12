import { Component, OnInit} from '@angular/core';
import { PollService } from './poll.service';
import { Poll } from './poll';
@Component({
  selector: 'poll',
  template: require('./poll.component.html')
  //styles: [`${styles}`]
})
export class PollComponent implements OnInit{
  polls: Poll[];
  constructor( private pollService: PollService){}
  ngOnInit(){
  	this.getPolls();
  }

  getPolls(): void{
  	this.pollService.getPolls().subscribe( polls =>{
  		this.polls = polls;
      console.log("Polls:",polls);
  	})
    
  }
}

