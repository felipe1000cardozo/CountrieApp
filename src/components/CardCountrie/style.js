import styled from "styled-components";

export const Card = styled.div`
  width: calc(25% - 78px);
  min-width: 265px;
  margin: 38px;
  border-radius: 6px;
  background-color: var(--primary-color);
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.5);
  color: var(--text-color);
  font-weight: 600;
  transition: box-shadow 0.4s;
  @media (max-width: 740px) {
    width: 100%;
  }
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(170, 170, 170, 0.3);
  }
  img {
    width: 100%;
    border-radius: 6px 6px 0 0;
  }
  .country-info {
    padding: 30px 15px 49px;
    h3 {
      margin-bottom: 30px;
    }
    p:nth-child(3) {
      margin: 15px 0;
    }
    span {
      font-weight: 300;
    }
  }
`;
