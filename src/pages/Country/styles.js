import styled, { keyframes, css } from "styled-components";

const animate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`;

export const AnimatedSpinner = styled.span`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  ${css`
    svg {
      animation: ${animate} 2s linear infinite;
    }
  `}
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 80px 0;
  padding: 12px;
  width: 10%;
  min-width: 138px;
  border: none;
  border-radius: 6px;
  background-color: var(--primary-color);
  color: var(--text-color);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.4s;
  :hover {
    box-shadow: 0px 0px 7px rgba(170, 170, 170, 0.3);
  }
  @media (max-width: 740px) {
    margin: 80px 20px 0;
  }
  span {
    margin-right: 9px;
    display: flex;
  }
`;

export const CountryContainer = styled.main`
  padding: 80px 40px;
  display: flex;
  flex-wrap: wrap;
  color: var(--text-color);
  @media (max-width: 740px) {
    padding: 80px 20px;
  }
  .container-img {
    width: 100%;
    max-width: 620px;
    margin: 0 40px;
    @media (max-width: 740px) {
      margin: 0;
    }
    img {
      width: 100%;
    }
  }
  .data-container {
    width: calc(50% - 80px);
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    @media (max-width: 740px) {
      width: 100%;
    }
    h1 {
      width: 100%;
    }
    div {
      p {
        margin: 10px 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        span {
          padding-left: 4px;
        }
        a {
          margin: 3px;
          display: block;
          padding: 6px;
          border: none;
          border-radius: 4px;
          background-color: var(--prymary-color);
          color: var(--text-color);
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
          transition: box-shadow 0.4s;
          :hover {
            box-shadow: 0px 0px 7px rgba(170, 170, 170, 0.3);
          }
        }
      }
    }
    div:nth-child(2) {
      margin-right: 60px;
    }
    div:nth-child(4) {
      margin-top: 60px;
      width: 100%;
    }
    span {
      opacity: 0.7;
      font-weight: 300;
    }
  }
`;
