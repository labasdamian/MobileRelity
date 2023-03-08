import { FunctionComponent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { VoteApi } from "../api/vote/vote.api";
import { Vote } from "../components/Votes/Vote";

export const SingleVote: FunctionComponent = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data } = useQuery(['single-vote'], () => VoteApi.get(id), {
		enabled: Boolean(id)
	})

	const onDelete = () => navigate('/votes')


	if(!data) {
		return <span>Loading...</span>
	}

	return (
		<>
			<Link to="/votes"><button>Back to votes list</button></Link>
			<h1>Single Vote</h1>
			<Vote vote={data} onDelete={onDelete} />
		</>
	)
}