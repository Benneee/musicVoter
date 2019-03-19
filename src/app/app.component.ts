import { Component, Input } from '@angular/core';
import { Song } from './votes.model';
import { ColorDirective } from './musicVoterColor/colorChange.directive';
import { SongDataService } from './songData.service';
import { Response } from '@angular/Http';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

	constructor( private songDataService: SongDataService) {
		this.songs = [  ];

  		this.pageColor = 'pink';
	}

	songs: Song[]; // This simply assigns the type "array" to the Song class from the Votes model
	pageColor: string;

	// This function adds the form entries to the songs array
	// addSong(name: HTMLInputElement, title: HTMLInputElement): boolean {
	// 	console.log(`Adding song name: ${name.value} and title: ${title.value}`);
	// 	this.songs.push(new Song(name.value, title.value, 0));
	// 	name.value = '';
	// 	title.value = '';
	// 	return false;
	// }

	addSong(form: NgForm) {
		console.log(form);
		this.songs.push(new Song(form.value.artisteName, form.value.title, 0));
		form.value.artisteName = '';
		form.value.title = '';
		console.log('the form: ', this.songs);
	}

	// The votes are sorted in descending order and updated dynamically
	sortedSongs(): Song[] {
		return this.songs.sort((a: Song, b: Song) => b.votes - a.votes);
	}

	onSave() {
		this.songDataService.storeSongs(this.songs).subscribe(
			(res) => console.log(res),
			(error) => console.log(error)
		);
		return false;
	}
	onGet() {
		this.songDataService.getSongs(this.songs).subscribe(
			(res: Response) => {
				const data = res.json();
				if (data) {
					for(const y in data) {
						for (const z in data[y]){
							console.log('looped', data[y][z]);	
								this.songs.push(new Song(
									data[y][z].name,
									data[y][z].title,
									data[y][z].votes
								))
							}
						}
					}
				}
			);
		return false;
	}

	// This function is linked to the button on the .html page to change the page color
	// changePageColor() {
	// 	const arrX = ['blue', 'green', 'purple', 'grey']
	// 	this.pageColor = arrX [Math.floor(Math.random() * (arrX.length-1))]
	// 	console.log('color changed');
	// }
}
