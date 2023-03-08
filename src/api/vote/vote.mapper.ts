import { VoteDto } from "./vote.dto";
import { Vote } from "../../model/Vote";

export class VoteMapper {
	static fromDto = (dto: VoteDto.ListItem): Vote.Item => ({
		id: dto.id,
		countryCode: dto.country_code,
		createdAt: dto.created_at,
		imageId: dto.image_id,
		subId: dto.sub_id,
		value: dto.value,
		image: {
			id: dto.image.id,
			url: dto.image.url,
		}
	})

	static toCreateDto = (vote: Vote.CreteVote): VoteDto.CreteVote => ({
		image_id: vote.imageId,
		sub_id: vote.subId,
		value: vote.value
	});
}