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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
export const ContainerCards = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Nav = styled.nav`
  display: flex;
  margin: 50px 38px 12px;
  justify-content: space-between;
  input {
    padding: 12px;
    width: 75%;
    max-width: 480px;
    border: none;
    border-radius: 6px;
    background-color: var(--primary-color);
    color: var(--text-color);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
  }
  select {
    padding: 20px;
    width: 30%;
    max-width: 200px;
    border: none;
    border-radius: 6px;
    background-color: var(--primary-color);
    color: var(--text-color);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;
