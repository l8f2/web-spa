import { atom } from "nanostores";

type THistory = {
  idx: number;
  pathname: string;
};

export const histories = atom<THistory[]>([]);
