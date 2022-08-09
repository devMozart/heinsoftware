import {
  faChevronRight,
  faLocationDot,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IconButton } from "../components";
import { useMediaQuery } from "react-responsive";

export const Hero = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 481px)" });

  return (
    <HeroContainer>
      <LeftColumn>
        <Location>
          <LocationIcon>
            <FontAwesomeIcon icon={faLocationDot} />
          </LocationIcon>
          Gothenburg, Sweden
        </Location>
        {isBigScreen ? (
          <>
            <HeroH1>Hello,</HeroH1>
            <HeroH1>I'm Amadeus Hein</HeroH1>
          </>
        ) : (
          <>
            <HeroH1>Hello, I'm Amadeus Hein</HeroH1>
          </>
        )}
        <Introduction>
          I’m a freelance full-stack developer based in Gothenburg specializing
          in building exceptional websites, applications and everything in
          between.
        </Introduction>
        <ButtonRow>
          <IconButton
            text="LinkedIn"
            href="https://www.linkedin.com/in/amadeushein/"
            icon={faChevronRight}
          />
          <IconButton
            text="Say hello"
            href="mailto:amadeus@hein.software"
            icon={faMessage}
            shouldAnimate={true}
          />
        </ButtonRow>
      </LeftColumn>
      <RightColumn>
        <ProfileImage src="/images/amadeus.jpg" alt="Amadeus Hein" />
      </RightColumn>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 9vh 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 64px;
  @media only screen and (max-width: 1328px) {
    column-gap: 32px;
    padding: 48px 24px 12px 24px;
  }
  @media only screen and (max-width: 600px) {
    padding: 24px 24px;
    display: flex;
    flex-direction: column;
    row-gap: 48px;
  }
`;

const LeftColumn = styled.div`
  text-align: left;
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 16px;
`;

const LocationIcon = styled.div`
  margin-right: 6px;
  font-size: 20px;
`;

const HeroH1 = styled.h1`
  font-size: 72px;
  font-weight: 400;
  margin: 0;
  @media only screen and (max-width: 1328px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 481px) {
    font-size: 48px;
  }
`;

const Introduction = styled.div`
  font-size: 20px;
  padding-top: 24px;
  margin-bottom: 64px;
  line-height: 1.5;
  @media only screen and (max-width: 1328px) {
    margin-bottom: 32px;
  }
  @media only screen and (max-width: 481px) {
    margin-bottom: 48px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  column-gap: 10%;
  @media only screen and (max-width: 1328px) {
    column-gap: 20%;
  }
  @media only screen and (max-width: 481px) {
    column-gap: 0;
    justify-content: space-between;
  }
`;

const ProfileImage = styled.img`
  height: 560px;
  width: 560px;
  object-fit: cover;
  border-radius: 50%;
  @media only screen and (max-width: 1328px) {
    height: 350px;
    width: 350px;
  }
  @media only screen and (max-width: 481px) {
    height: 250px;
    width: 250px;
  }
`;
