import styled from "styled-components";
import PricingCard from "../components/PricingCard";

export default function Home() {
	return (
		<Container>
			<HeroWrapper>
				<Heading>Buy once, use it forever.</Heading>
				<Subheading>
					Get lifetime access to 400+ components today, plus any updates we
					release in the future for a simple one-time price.
				</Subheading>
			</HeroWrapper>
			<PricingContainer>
				<PricingCard
					tag={"APPLICATION UI"}
					price={"£119"}
					vat={"(+£23.80 VAT)"}></PricingCard>
				<PricingCard
					primary
					tag={"APPLICATION UI + MARKETING"}
					price={"189"}
					vat={"(+£37.80 VAT)"}></PricingCard>
				<PricingCard
					tag={"MARKETING"}
					price={"£119"}
					vat={"(+£23.80 VAT)"}></PricingCard>
			</PricingContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url("/beams-bottom.jpg");
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const HeroWrapper = styled.div`
	width: 50%;
`;

const Heading = styled.div`
	font-weight: 800;
	font-size: 54px;
	color: white;
	text-align: center;
`;

const Subheading = styled.div`
	margin-top: 1rem;
	font-size: 18px;
	color: #d1d5db;
	text-align: center;
`;

const PricingContainer = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
`;
