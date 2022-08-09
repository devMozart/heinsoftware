import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, keyframes } from "styled-components";

export const IconButton = ({ text, href, icon, shouldAnimate }) => {
  return (
    <Button href={href} target="_blank" rel="noopener noreferrer">
      {text}
      <Icon shouldAnimate={shouldAnimate}>
        <FontAwesomeIcon icon={icon} />
      </Icon>
    </Button>
  );
};

const nudgeAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  75% {
    transform: translateX(0%);
  }
  80% {
    transform: translateX(25%);
  }
  85% {
    transform: translateX(0%);
  }
  90% {
    transform: translateX(25%);
  }
  95% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const hoverAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(75%);
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  font-weight: 600;
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    color: #4a4a4a;
  }
`;

const Icon = styled.div`
  margin: 0 6px;
  transition: all 100ms ease;
  ${({ shouldAnimate }) =>
    shouldAnimate &&
    css`
      animation: ${nudgeAnimation} 5000ms ease-in-out infinite;
      animation-delay: 3s;
    `}
  ${Button}:hover & {
    animation: ${hoverAnimation} 100ms ease;
    animation-fill-mode: forwards;
  }
`;
