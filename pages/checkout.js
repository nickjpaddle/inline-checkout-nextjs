import React, { useEffect } from "react";
import styled from "styled-components";

export default function Checkout(props) {
	useEffect(() => {
		const Paddle = window.Paddle;
		console.log(Paddle);
		Paddle.Setup({ vendor: 2712 });
		Paddle.Environment.set("sandbox");

		Paddle.Checkout.open({
			method: "inline",
			product: 13941, // Replace with your Product or Plan ID
			allowQuantity: false,
			disableLogout: true,
			frameTarget: "checkout-container", // The className of your checkout <div>
			frameInitialHeight: 416,
			frameStyle:
				"width:100%; min-width:312px; background-color: transparent; border: none;", // Please ensure the minimum width is kept at or above 286px with checkout padding disabled, or 312px with checkout padding enabled. See "General" section under "Branded Inline Checkout" below for more information on checkout padding.
		});
	}, []);

	return (
		<Container>
			<LeftPane>
				<div className="checkout-container"></div>
			</LeftPane>
			<RightPane></RightPane>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: row;
`;

const RightPane = styled.div`
	height: 100vh;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #121826;
`;

const LeftPane = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
