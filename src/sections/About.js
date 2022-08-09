import styled from "styled-components";
import { Tag } from "../components";

const tags = [
  "React",
  "Redux",
  "Vue.js",
  "JavaScript",
  "TypeScript",
  "C#",
  "Node.js",
  "F#",
  "Elm",
  "SQL",
  "MongoDB",
  ".NET",
  "Azure",
  "React Testing Library",
  "Styled Components",
];

export const About = () => {
  return (
    <AboutContainer>
      <LeftColumn>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </Tags>
      </LeftColumn>
      <RightColumn>
        <AboutH2>A little about me</AboutH2>
        <AboutText>
          Thanks for stopping by. For the past 11 years I've been coding and
          solving problems in a multitude of different projects and industries.
          From web to hardware, frontend to backend, object-oriented to
          functional and many things in between. I find it awesome that in my
          profession there's always something new to learn.
        </AboutText>
        <AboutText>
          I'm a people person, so apart from coding I've realized that I am
          happy and do extra well if my colleagues are happy. I believe strongly
          in sharing feedback, knowledge and appreciating each other's work -
          and it's something I work with every day.
        </AboutText>
        <AboutText>
          Currently I help ICA deliver online marketing tools for their
          retailers, using Vue.js and JavaScript. If you're interested in
          working together in the future, please say hello!
        </AboutText>
      </RightColumn>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 0 9vh 0;
  display: grid;
  grid-template-columns: 1fr 65%;
  column-gap: 64px;
  @media only screen and (max-width: 1328px) {
    column-gap: 24px;
    padding: 24px 24px;
  }
  @media only screen and (max-width: 600px) {
    padding: 24px 24px;
    display: flex;
    flex-direction: column-reverse;
    row-gap: 6px;
  }
`;

const LeftColumn = styled.div`
  margin: auto 0;
  @media only screen and (max-width: 1328px) {
    margin: 2px 0;
  }
`;

const RightColumn = styled.div``;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 6px;
  row-gap: 8px;
`;

const AboutH2 = styled.h2`
  margin: 0;
  font-size: 16px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;
