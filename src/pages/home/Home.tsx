import { useRecoilState } from "recoil";

import HomeContainer from "./Home.styled";
import { timerMinuteState, timerSecondState } from "@/atoms/atoms";
import { useEffect } from "react";

export default function Home() {
  const [minute, setMinute] = useRecoilState(timerMinuteState);
  const [second, setSecond] = useRecoilState(timerSecondState);

  const timerId = setInterval(() => {
    if (minute === 0 && second === 0) {
      clearInterval(timerId);
      return;
    }

    if (second === 0) {
      setMinute((prev) => prev - 1);
      setSecond(59);
    } else {
      setSecond((prev) => prev - 1);
    }
  }, 10000);

  return (
    <HomeContainer>
      <h1 className="home__title">Pomodoro</h1>

      <section className="home__timer--wrapper">
        <div className="home__timer__time home__timer--minute">
          <span>{minute}</span>
        </div>
        <div>:</div>
        <div className="home__timer__time home__timer--second">
          <span>{second}</span>
        </div>
      </section>

      <button>▶:⏸</button>

      <div>
        <div>
          <div>0/4</div>
          <p>ROUND</p>
        </div>
        <div>
          <div>0/12</div>
          <p>GOAL</p>
        </div>
      </div>
    </HomeContainer>
  );
}
