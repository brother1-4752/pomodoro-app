import { atom } from "recoil";

export const timerMinuteState = atom<number>({
  key: "timerMinuteState",
  default: 25,
});

export const timerSecondState = atom<number>({
  key: "timerSecondState",
  default: 0,
});
