import styled from "styled-components";

export const ContainerLoadingPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10%;

	h1{
		font-size: 50px;
	}

	div{
		display: inline-block;
		align-items: center;
		justify-content: center;

		img{
			width: 100px;
		}
	}
	
`
export const SpinnerLoading = styled.div`
	width: 30px;
	height: 30px;
	margin: 50px;
	border: solid 4px green;
	border-right-color: transparent;
	border-radius: 50%;
	animation: Spin 1s infinite;

	@keyframes Spin {
		from {
			transform: rotate(0deg)
		}
		to {
			transform: rotate(360deg);
		}
}
`