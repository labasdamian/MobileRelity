
export declare namespace Vote {
	export type VoteValue = 1 | -1;

	export type Image = {
		id: string;
		url: string;
	}

	export type Item = {
		id: number;
		countryCode: string;
		createdAt: Date;
		image: Image;
		imageId: string;
		subId: string | null;
		value: VoteValue;
	}

	export type List = Item[];

	export type CreteVote = {
		imageId: string;
		subId: string;
		value: VoteValue;
	}
}