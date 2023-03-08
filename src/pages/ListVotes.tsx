import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { VoteApi } from "../api/vote/vote.api";
import { Vote } from "../components/Votes/Vote";
import { List } from "../components/Votes/VoteList.style";
import { Link } from "react-router-dom";

export const ListVotes: FunctionComponent = () => {
	const { isLoading, data = [], refetch } = useQuery(['votes-list'], () => VoteApi.list());

	const onDelete = () => refetch();

	if(isLoading) {
		return <span>Loading...</span>
	}

	return (
		<>
			<Link to="/votes/create">
				<button>Create Vote</button>
			</Link>

			<List>
				<h1>Votes</h1>
				{data.map((vote) => <Vote key={vote.id} vote={vote} onDelete={onDelete} />)}
			</List>
		</>
	)
}