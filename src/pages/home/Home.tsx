import { useRef, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import HomeContainer from "./Home.styled";
import formatTimeData from "@/utils/formatTimeData";
import { goalState, isPlayState, roundState, timerState } from "@/atoms/atoms";
import {
  TIMER_INTERVAL_MILLISECONDS,
  TOTAL_GOAL,
  TOTAL_ROUND,
  TOTAL_TIME,
} from "@/constants/constants";

export default function Home() {
  const [time, setTime] = useRecoilState(timerState);
  const { FORMATTED_MINUTE, FORMATTED_SECOND } = formatTimeData(time);
  const [isPlay, setIsPlay] = useRecoilState(isPlayState);
  const [round, setRound] = useRecoilState(roundState);
  const [goal, setGoal] = useRecoilState(goalState);

  const timerRef = useRef<number>();

  const toggleIsPlay = () => {
    setIsPlay((prev) => !prev);
  };

  const resetTimer = useCallback(() => {
    setTime(TOTAL_TIME);
    setIsPlay(false);
  }, [setTime, setIsPlay]);

  useEffect(() => {
    if (isPlay) {
      timerRef.current = setInterval(() => {
        if (time === 0) {
          resetTimer();
          if (round === TOTAL_ROUND - 1) {
            setRound(0);
            setGoal((prev) => prev + 1);
          } else {
            setRound((prev) => prev + 1);
          }
        } else if (goal === TOTAL_GOAL - 1) {
          alert("미션 성공!");
        } else {
          setTime((prev) => prev - 1);
        }
      }, TIMER_INTERVAL_MILLISECONDS);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isPlay, time, setTime, resetTimer, goal, setGoal, round, setRound]);

  return (
    <HomeContainer>
      <h1 className="home__title">Pomodoro</h1>

      <section className="home__timer--wrapper">
        <div className="home__timer__time home__timer--minute">
          <span>{FORMATTED_MINUTE}</span>
        </div>
        <div>:</div>
        <div className="home__timer__time home__timer--second">
          <span>{FORMATTED_SECOND}</span>
        </div>
      </section>

      <button onClick={toggleIsPlay}>{isPlay ? "⏸" : "▶"}</button>

      <div>
        <div>
          <div>
            {round}/{TOTAL_ROUND}
          </div>
          <p>ROUND</p>
        </div>
        <div>
          <div>
            {goal}/{TOTAL_GOAL}
          </div>
          <p>GOAL</p>
        </div>
      </div>
    </HomeContainer>
  );
}
