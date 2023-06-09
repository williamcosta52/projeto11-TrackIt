import styled from "styled-components";

export const HabitStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 80px;
`;
export const ContainerHabit = styled.div`
	background-color: rgb(242, 242, 242);
	height: 100%;
`;
export const AddNewHabit = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	p {
		margin-top: 28px;
		margin-left: 17px;
		font-family: "Lexend Deca";
		font-weight: 400;
		font-size: 22.976px;
		line-height: 29px;
		color: #126ba5;
	}
`;
export const AddButton = styled.button`
	width: 40px;
	height: 35px;
	background: #52b6ff;
	border-radius: 4.63636px;
	border: none;
	margin-top: 30px;
	margin-right: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 4px;
	span {
		font-family: "Lexend Deca";
		font-weight: 400;
		font-size: 26.976px;
		line-height: 34px;
		color: #ffffff;
		width: 16px;
		height: 34px;
		text-align: center;
	}
`;
export const DivHabit = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 338px;
	height: 74px;
	margin-top: 25px;
	p {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 17.976px;
		line-height: 22px;
		color: #666666;
		margin-left: 17px;
	}
`;
export const HabitCard = styled.div`
	width: 340px;
	height: 180px;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	margin-left: 17px;
	border-radius: 5px;
	margin-top: 20px;
	input {
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		width: 303px;
		height: 45px;
		margin-top: 18px;
		margin-left: 16px;
	}
	input::placeholder {
		font-family: "Lexend Deca";
		display: flex;
		align-items: center;
		font-style: normal;
		font-weight: 400;
		font-size: 19.976px;
		line-height: 25px;
		color: #dbdbdb;
		padding-left: 8px;
	}
`;
export const HabitCardButton = styled.div`
	display: flex;
	margin-left: 14px;
	button {
		width: 30px;
		height: 30px;
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 19.976px;
		line-height: 25px;
		color: #dbdbdb;
		margin: 8px 2px;
	}
`;
export const SaveHabit = styled.div`
	display: flex;
	margin-top: 30px;
	button {
		width: 84px;
		height: 35px;
		background: #52b6ff;
		border-radius: 4.63636px;
		border: none;
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 15.976px;
		line-height: 20px;
		text-align: center;
		color: #ffffff;
		margin-left: 23px;
		margin-bottom: 17px;
	}
	p {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 15.976px;
		line-height: 20px;
		text-align: center;
		color: #52b6ff;
		margin-left: 144px;
		margin-top: 7px;
	}
`;
export const HabitDiv = styled.div`
	width: 340px;
	height: 91px;
	margin-left: 17px;
	background-color: #ffffff;
	border-radius: 5px;
	margin-top: 18px;
`;
export const TextImg = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	p {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 19.976px;
		line-height: 25px;
		color: #666666;
		margin-top: 5px;
		width: 200px;
		margin-left: 17px;
	}
	img {
		width: 13px;
		height: 15px;
		margin-top: 3px;
		margin-right: 8px;
	}
`;
export const DivDays = styled.div`
	margin-left: 13px;
	button {
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 19.976px;
		line-height: 25px;
		color: #dbdbdb;
		margin-left: 4px;
		margin-top: 8px;
	}
`;
