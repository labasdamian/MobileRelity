export declare namespace VoteDto {
	export type VoteValue = 1 | -1;

	export type Image = {
		id: string;
		url: string;
	}

	export type ListItem = {
		id: number;
		country_code: string;
		created_at: Date;
		image: Image;
		image_id: string;
		sub_id: string | null;
		value: VoteValue;
	}

	export type CreteVote = {
		image_id: string;
		sub_id: string;
		value: VoteValue;
	}
}