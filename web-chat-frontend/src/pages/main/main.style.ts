import styled from "styled-components";
import background from "../../assets/social-networks-dating-apps-vector-seamless-pattern_341076-469.avif";

export const MainStyle = styled.main`
  padding-top: 3rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #mute-unmute {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }
  section {
    width: 80%;
    height: 70vh;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 4px;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: scroll;
      background-image: url(${background});
      padding: 4px;

      li {
        max-width: 45%;
        padding: 4px;
        text-align: start;
        background-color: rgba(0, 0, 0, 0.77);
        color: white;
        border-radius: 8px;
        margin-bottom: 16px;

        a {
          color: red;
        }
      }
      .false {
        align-self: flex-start;
        h1 {
          color: burlywood;
        }
      }
      .owner {
        align-self: flex-end;
        h1 {
          color: greenyellow;
        }
      }
    }

    form {
      min-width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      

      input {
        width: 100%;
      }
    }
  }
`;
