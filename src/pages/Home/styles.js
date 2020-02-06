import styled from "styled-components";

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
