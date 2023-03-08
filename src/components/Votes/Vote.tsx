import { FunctionComponent } from "react";
import { Vote as VoteModel } from "../../model/Vote";
import { DeleteButton, ListItem } from "./VoteList.style";
import { useMutation } from "react-query";
import { VoteApi } from "../../api/vote/vote.api";
import { Link } from "react-router-dom";

export interface VoteListItemProps  {
	vote: VoteModel.Item;
	onDelete: () => any;
}

export const Vote: FunctionComponent<VoteListItemProps> = ({ vote, onDelete }) => {
	const mutation = useMutation('delete-vote', (voteId: number) => VoteApi.delete(voteId), {
		onSuccess: onDelete
	})

	const handleDelete = (event) => {
		event.preventDefault();

		return mutation.mutate(vote.id);
	}


	return (
		<ListItem>
			<Link to={`/votes/${vote.id}`}>
				<img src={vote.image.url} alt="vote-image" width={400}/>
			</Link>
			<DeleteButton onClick={handleDelete}>Delete</DeleteButton>
		</ListItem>
  )
}