import styled from "styled-components";

export const Success = styled.div`
  background-image: linear-gradient(120deg, #157347, #156547);
  border-left: solid 10px black;
  border-radius: 2px;
  box-shadow: 0px 1px 5px 1px gray;
  margin-top: 1rem;
  padding: 1rem;
  color: #ffffff;
  min-height: 100%;
`;

export const Error = styled.div`
  background-image: linear-gradient(120deg, darkred 0%, red 100%);
  border-left: solid 10px black;
  border-radius: 2px;
  box-shadow: 0px 1px 5px 1px gray;
  margin-top: 1rem;
  padding: 1rem;
  color: #ffffff;
  min-height: 100%;
`;
