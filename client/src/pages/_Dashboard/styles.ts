import styled from 'styled-components';

export const Header = styled.div`
  height: 80px;
  background-color: #35e1cb;
  padding: 0.5em;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 15px;

  border-style: solid;
  border-bottom-width: 0;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;

  p {
    font-size: 12px;
    color: #737380;
  }
`;
