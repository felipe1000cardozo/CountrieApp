import styled from "styled-components";

export const BackButton = styled.button`
  padding: 12px;
  width: 10%;
  min-width: 138px;
  border: none;
  border-radius: 6px;
  background-color: var(--primary-color);
  color: var(--text-color);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
`;

export const CountryContainer = styled.main`
  padding: 80px;
  display: flex;
  color: #fff;
  .container-img {
    width: 50%;
    margin-right: 80px;
    img {
      width: 100%;
    }
  }
  .data-container {
    display: flex;
    flex-wrap: wrap;
    h1 {
      width: 100%;
    }
    div:nth-child(2) {
      margin-right: 60px;
    }
    span {
      opacity: 0.7;
      font-weight: 300;
    }
  }
`;
