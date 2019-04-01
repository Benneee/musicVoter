import { Component, OnInit } from "@angular/core";
import { Song } from "../votes.model";
import { SongDataService } from "../songData.service";
import { Response } from "@angular/Http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  constructor(private songDataService: SongDataService) {
    this.songs = [];

    this.pageColor = "pink";
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
    form.value.artisteName = "";
    form.value.title = "";
    console.log("the form: ", this.songs);
  }

  // The votes are sorted in descending order and updated dynamically
  sortedSongs(): Song[] {
    return this.songs.sort((a: Song, b: Song) => b.votes - a.votes);
  }

  onSave() {
    this.songDataService
      .storeSongs(this.songs)
      .subscribe(res => console.log(res), error => console.log(error));
    return false;
  }
  onGet() {
    this.songDataService.getSongs(this.songs).subscribe((res: Response) => {
      const data = res.json();
      if (data) {
        for (const y in data) {
          for (const z in data[y]) {
            console.log("looped", data[y][z]);
            this.songs.push(
              new Song(data[y][z].name, data[y][z].title, data[y][z].votes)
            );
          }
        }
      }
    });
    return false;
  }
}
