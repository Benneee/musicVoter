import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Song } from "./votes.model";
import { AuthService } from "./auth/auth.service";

@Injectable()
export class SongDataService {
  constructor(private http: Http, private authService: AuthService) {}

  // This method sends the HTTP request to Firebase to save the songs entered by the user
  storeSongs(songs: Song[]) {
    const token = this.authService.getToken();
    return this.http.post(
      "https://musicvoter-3bafe.firebaseio.com/data.json?auth=" + token,
      songs
    );
  }

  // This method sends the HTTP request to Firebase to retrieve the songs previously saved by the user
  getSongs(songs: Song[]) {
    const token = this.authService.getToken();
    return this.http.get(
      "https://musicvoter-3bafe.firebaseio.com/data.json?auth=" + token
    );
  }
}
