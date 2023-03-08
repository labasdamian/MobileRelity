import { FunctionComponent } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Vote } from "../model/Vote";
import { VoteApi } from "../api/vote/vote.api";

export const CreateVote: FunctionComponent = () => {
	const navigate = useNavigate();

	const mutation = useMutation((vote: Vote.CreteVote) => VoteApi.create(vote), {
		onSuccess: () => navigate('/votes')
	});

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = data => mutation.mutate(data);

	return (
		<div>
			<Link to="/votes">
				<button>Back to votes list</button>
			</Link>
			<hr />
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Image Id</label>
				<input type="text" {...register('imageId', { required: true })}/>

				<label>Vote</label>
				<input type="number" {...register('value', { required: true })}/>

				<hr />
				<div>
					{errors.imageId && <span>Image id is request field</span>}
				</div>
				<div>
					{errors.value && <span>Image id is request field</span>}
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}