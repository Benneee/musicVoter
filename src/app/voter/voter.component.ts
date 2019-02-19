import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../votes.model';
@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
	@Input() songs: Song;
  
  constructor() {
  }

   voteUp(): boolean {
  	this.songs.voteUp();
  	return false;
  }

  voteDown(): boolean {
  	this.songs.voteDown();
  	return false;
  }

  ngOnInit(){

  }

}
