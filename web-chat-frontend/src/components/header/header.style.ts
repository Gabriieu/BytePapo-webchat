import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: whitesmoke;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: fixed;

  img {
    height: 60px;
    max-width: 50%;
  }

  button {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

    &:hover {
      color: red;
      transform: scale(1.1);
    }
  }
`;
