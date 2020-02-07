import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 38px;
  background-color: var(--primary-color);
  color: var(--text-color);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
  button {
    background: none;
    border: none;
    color: var(--text-color);
    font-weight: 600;
    display: flex;
    align-items: center;
    ${css`
      svg {
        margin-right: 5px;
      }
    `}
  }
`;
