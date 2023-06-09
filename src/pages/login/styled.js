import styled from "styled-components";

export const LoginStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	align-items: center;
	width: 100%;
	color: yellow;
	input {
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		height: 25px;
		width: 303px;
		font-weight: 400;
		font-size: 19.976px;
		line-height: 25px;
		margin: 5px 0px;
		display: flex;
		padding: 11px;
	}
	input::placeholder {
		color: #dbdbdb;
		font-family: "Lexend Deca";
	}
	button {
		width: 327px;
		height: 45px;
		background-color: #52b6ff;
		border-radius: 4.63636px;
		border: none;
		font-weight: 400;
		font-size: 20.976px;
		line-height: 26px;
		text-align: center;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	p {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 13.976px;
		line-height: 17px;
		text-align: center;
		text-decoration-line: underline;
		color: #52b6ff;
	}
`;
