import styled from "@emotion/styled";

export const List = styled.div`
 	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const ListItem = styled.div`
	display: flex;
`;

export const DeleteButton = styled.button`
	color: white;
	background: red;
	&:hover {
		cursor: pointer; 
	}
`