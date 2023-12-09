import styled from "styled-components";
import background from "../../assets/social-networks-dating-apps-vector-seamless-pattern_341076-469.avif"

export const MainStyle = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${background});

  form {
    background-color: rgba(0, 0, 0, 0.77);
    padding: 2rem;
    border-radius: 8px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: relative;

    input {
      min-height: 40px;
      padding: 8px;
    }

    button {
      background-color: var(--red-1);
      color: white;
      padding: 1rem;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    svg {
      position: absolute;
      top: 44%;
      left: 75%;
    }
  }
  .error {
    color: red;
  }
`;
