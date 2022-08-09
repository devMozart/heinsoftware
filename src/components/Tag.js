import styled from "styled-components";

export const Tag = ({ text }) => {
  return <TagContainer>{text}</TagContainer>;
};

const TagContainer = styled.span`
  font-size: 14px;
  font-weight: 500;
  padding: 6px 10px;
  background-color: #c5e3d3;
`;
