import { TOTAL_TIME } from "@/constants/constants";
import { atom } from "recoil";

export const timerState = atom<number>({
  key: "timerState",
  default: TOTAL_TIME,
});

export const isPlayState = atom<boolean>({
  key: "isPlayState",
  default: false,
});

export const roundState = atom<number>({
  key: "roundState",
  default: 0,
});

export const goalState = atom<number>({
  key: "goalState",
  default: 0,
});
