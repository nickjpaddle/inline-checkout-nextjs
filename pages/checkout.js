import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Checkout() {
	const [prices, setPrices] = useState();
	const [progress, setProgress] = useState("Email");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const Paddle = window.Paddle;
		console.log(Paddle);
		Paddle.Setup({
			vendor: 2712,
			eventCallback: function (data) {
				if (data.event === "Checkout.Login") {
					setProgress("Address");
				} else if (data.event === "Checkout.Location.Submit") {
					setProgress("Payment");
				}
			},
		});
		Paddle.Environment.set("sandbox");

		Paddle.Checkout.open({
			method: "inline",
			product: 13941,
			allowQuantity: false,
			disableLogout: true,
			frameTarget: "checkout-container",
			frameInitialHeight: 416,
			frameStyle:
				"width:100%; min-width:286px; background-color: transparent; border: none;",
			loadCallback: () => {
				setLoading(false);
			},
		});

		Paddle.Product.Prices(13941, function (rawPrices) {
			setPrices(rawPrices);
		});
	}, []);

	return (
		<Container>
			<LeftPane>
				<CheckoutWrapper>
					<div>{progress}</div>
					<div>{loading === false ? "not loading" : "loading"}</div>
					<Image
						src="/tailwindui-logo-on-white.svg"
						alt="logo"
						width={188}
						height={28}
					/>
					<BreadcrumbWrapper>
						<BreadcrumbItem>Packages</BreadcrumbItem>
						<BreadcrumbItem>Email</BreadcrumbItem>
						<BreadcrumbItem>Address</BreadcrumbItem>
						<BreadcrumbItem>Payment</BreadcrumbItem>
					</BreadcrumbWrapper>
					<CheckoutHeading>Payment Details</CheckoutHeading>
					<CheckoutSubheading>
						Complete your purchase by providing your payment information.
					</CheckoutSubheading>
					<div className="checkout-container"></div>
				</CheckoutWrapper>
			</LeftPane>
			<RightPane>
				<PriceWrapper>
					<Tagline>Marketing + Application UI Bundle</Tagline>
					<Price>{prices == null ? "loading" : prices.price.gross}</Price>
					<Subheading>
						Includes all components from both the Application UI and Marketing
						kits.
					</Subheading>
					<PriceBox>
						<PriceItemWrapper>
							<PriceItem>Subtotal</PriceItem>
							<PriceItem>
								{prices == null ? "loading" : prices.price.net}
							</PriceItem>
						</PriceItemWrapper>
						<PriceItemWrapper>
							<PriceItem>VAT</PriceItem>
							<PriceItem>
								{prices == null ? "loading" : prices.price.tax}
							</PriceItem>
						</PriceItemWrapper>
						<PriceItemWrapper>
							<PriceItem>Total Price</PriceItem>
							<PriceItem>
								{prices == null ? "loading" : prices.price.gross}
							</PriceItem>
						</PriceItemWrapper>
					</PriceBox>
				</PriceWrapper>
			</RightPane>
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
	height: 120vh;
	width: 50%;
	display: flex;
	padding-top: 7rem;
	justify-content: center;
	background-color: #111827;
`;

const PriceWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Price = styled.div`
	font-size: 36px;
	color: white;
	font-weight: 600;
	margin-top: 0.5rem;
`;

const Tagline = styled.div`
	font-size: 18px;
	color: #22d3ee;
`;

const CheckoutWrapper = styled.div`
	width: 50%;
	min-width: 286px;
`;

const Subheading = styled.div`
	font-size: 16px;
	color: #9ca3af;
	margin-top: 2rem;
	width: 80%;
	line-height: 1.5rem;
`;

const PriceBox = styled.div`
	background-color: #0d121c;
	width: 80%;
	margin-top: 3rem;
	border-radius: 10px;
`;

const PriceItemWrapper = styled.div`
	padding: 1.7rem 1.7rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid #1d222e;
`;

const PriceItem = styled.div`
	font-size: 16px;
	color: white;
	font-weight: 500;
`;

const LeftPane = styled.div`
	width: 50%;
	height: 120vh;
	display: flex;
	padding-top: 7rem;
	align-items: center;
	flex-direction: column;
`;

const BreadcrumbWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-content: center;
	margin-top: 1.5rem;
`;

const BreadcrumbItem = styled.div`
	font-size: 14px;
	color: #6b7280;
	margin-right: 1rem;
`;

const CheckoutHeading = styled.div`
	font-size: 18px;
	color: black;
	margin-top: 1.5rem;
	font-weight: 500;
`;

const CheckoutSubheading = styled.div`
	font-size: 16px;
	color: #4b5563;
	font-weight: 300;
	margin-top: 0.8rem;
	margin-bottom: 0.8rem;
`;
