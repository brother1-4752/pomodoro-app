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
import styled from "styled-components";
import { motion } from "framer-motion";

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
  }, [time, isPlay, resetTimer, goal, round]);

  const TimeCard = styled(motion.div)`
    width: 200px;
    line-height: 200px;
    text-align: center;

    background-color: white;
    border-radius: 15px;
  `;

  const ToggleButton = styled(motion.button)`
    width: 100px;
    height: 50px;

    border: none;
    border-radius: 15px;
    cursor: pointer;
  `;

  return (
    <HomeContainer>
      <h1 className="home__title">Pomodoro</h1>

      <section className="home__timer__wrapper">
        <TimeCard
          key={`${FORMATTED_MINUTE}-minutes`}
          initial={{ scale: 0.7, opacity: 0.5 }}
          transition={{ type: "spring" }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <span>{FORMATTED_MINUTE}</span>
        </TimeCard>
        <div>:</div>
        <TimeCard
          key={`${FORMATTED_SECOND}-seconds`}
          initial={{ scale: 0.7, opacity: 0.5 }}
          transition={{ type: "spring" }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {FORMATTED_SECOND}
        </TimeCard>
      </section>

      <ToggleButton
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.8 }}
        onClick={toggleIsPlay}
      >
        {isPlay ? "⏸" : "▶"}
      </ToggleButton>

      <div className="counter__wrapper">
        <div className="counter__mission">
          <p>ROUND</p>
          <div>
            {round}/{TOTAL_ROUND}
          </div>
        </div>
        <div className="counter__mission">
          <p>GOAL</p>
          <div>
            {goal}/{TOTAL_GOAL}
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}
