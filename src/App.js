import styled from "styled-components";
import { FadeAnimation } from "./components";
import { Header, Hero, About } from "./sections";

const App = () => {
  return (
    <AppContainer>
      <FadeAnimation delayInSeconds={0} lengthInSeconds={0}>
        <Header />
      </FadeAnimation>
      <FadeAnimation delayInSeconds={0} lengthInSeconds={1}>
        <Hero />
      </FadeAnimation>
      <FadeAnimation delayInSeconds={1.5} lengthInSeconds={1}>
        <About />
      </FadeAnimation>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #e6f0eb;
`;

export default App;
