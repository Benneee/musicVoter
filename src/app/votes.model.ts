export class Song {
	name: string;
	title: string;
	votes: number;

	constructor(name: string, title: string, votes?: number) {
		this.name = name;
		this.title = title;
		this.votes = votes;
	}

	voteUp(): void {
		this.votes += 1;
	}
	voteDown(): void {
		this.votes -= 1;
	}
}