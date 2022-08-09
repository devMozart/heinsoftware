import styled, { keyframes } from "styled-components";

export const FadeAnimation = ({
  children,
  fadeOut,
  lengthInSeconds,
  delayInSeconds,
}) => {
  return (
    <FadeWrapper
      fadeOut={fadeOut}
      length={lengthInSeconds}
      delay={delayInSeconds}
    >
      {children}
    </FadeWrapper>
  );
};

const fadeInAnimation = keyframes`
  0% {
    transform: translateY(10%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const FadeWrapper = styled.div`
  display: inline-block;
  animation-name: ${({ fadeOut }) =>
    fadeOut ? fadeOutAnimation : fadeInAnimation};
  animation-duration: ${({ length }) => length}s;
  animation-timing-function: ease-in-out;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
  opacity: 0;
  visibility: ${({ fadeOut }) => (fadeOut ? "hidden" : "visible")};
  transition: all ${({ length }) => length}s linear;
`;
