import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

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

  .home__timer__wrapper {
    width: 600px;
    height: 300px;
    font-size: 36px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    /* .home__timer__time {
      width: 200px;
      line-height: 200px;
      text-align: center;

      background-color: white;
      border-radius: 15px;
    } */
  }

  /* .home__toggle--btn {
    width: 100px;
    height: 50px;

    border: none;
    border-radius: 15px;
    cursor: pointer;
  } */

  .counter__wrapper {
    width: 50%;
    height: 200px;

    margin-top: 20px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .counter__mission {
      width: 150px;
      line-height: 50px;

      display: flex;
      justify-content: space-evenly;

      background-color: white;
      border-radius: 10px;
    }
  }
`;

export default HomeContainer;
