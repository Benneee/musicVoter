import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Song } from './votes.model';

@Injectable()
export class SongDataService {
    constructor(private http: Http) {}
    storeSongs(songs: Song[]) {
        return this.http.post('https://musicvoter-3bafe.firebaseio.com/data.json', songs);
    }

    getSongs(songs: Song[]) {
        return this.http.get('https://musicvoter-3bafe.firebaseio.com/data.json');
    }
}
