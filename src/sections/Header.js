import styled from "styled-components";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../components";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 500px)" });

  return (
    <HeaderContainer>
      <Logo>Hein Software</Logo>
      {isBigScreen && (
        <IconButton
          text="LinkedIn"
          href="https://www.linkedin.com/in/amadeushein/"
          icon={faChevronRight}
        />
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 96px;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 1328px) {
    padding: 0 24px;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
