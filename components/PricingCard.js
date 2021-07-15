import React from "react";
import styled from "styled-components";
import Link from "next/link";

const PricingCard = (props) => {
	return (
		<Container>
			<HeaderWrapper>
				<Tag>{props.tag}</Tag>
				<Price>{props.price}</Price>
				<VAT>{props.vat}</VAT>
			</HeaderWrapper>
			<Link href={"/checkout"} passHref>
				<Button>Get this package</Button>
			</Link>
		</Container>
	);
};

export default PricingCard;

const Container = styled.div`
	width: 28%;
	background-color: #111827;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 3rem;
	padding-bottom: 3rem;
	border-radius: 15px;
	border: ${(props) =>
		props.primary ? "1px solid #22d3ee;" : "1px solid #38404a"};
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-left: 1rem;
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Tag = styled.div`
	font-size: 14px;
	text-transform: uppercase;
	color: white;
`;

const Price = styled.div`
	font-size: 48px;
	color: ${(props) => (props.primary ? "#22d3ee;" : "white")};
	font-weight: 800;
`;

const VAT = styled.div`
	font-size: 14px;
	color: #9ca3af;
`;

const Button = styled.button`
	width: 80%;
	outline: none;
	border-radius: 8px;
	background-color: #22d3ee;
	color: #111827;
	border: none;
	padding: 13px 9px;
	font-size: 14px;
	font-weight: 500;
	margin-top: 3rem;
	cursor: pointer;
	&:hover {
		background-color: #52e4fa;
	}
`;
