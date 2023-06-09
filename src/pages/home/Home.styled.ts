import styled from "styled-components";

const HomeContainer = styled.div`
  width: 60%;
  height: 100vh;

  padding-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: tomato;

  .home__title {
    font-size: 3em;
    font-weight: 900;

    margin-bottom: 100px;

    color: white;
  }

  .home__timer--wrapper {
    width: 600px;
    height: 400px;

    display: flex;
    justify-content: space-evenly;

    .home__timer__time {
      width: 200px;
      height: 300px;

      background-color: white;
      border-radius: 15px;
    }
  }
`;

export default HomeContainer;
