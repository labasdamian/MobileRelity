import { http } from "../http";
import { Vote } from "../../model/Vote";
import { VoteMapper } from "./vote.mapper";

export class VoteApi {
	static list(): Promise<Vote.List> {
		return http.get('/votes').then((response) =>
			response.data.map((vote) => VoteMapper.fromDto(vote))
		)
	}

	static create(vote: Vote.CreteVote): Promise<unknown> {
		return http.post('/votes', VoteMapper.toCreateDto(vote))
	}

	static get(voteId): Promise<Vote.Item> {
		return http.get(`/votes/${voteId}`).then((response) => VoteMapper.fromDto(response.data))
	}

	static delete(voteId: number): Promise<void> {
		return http.delete(`/votes/${voteId}`)
	}
}