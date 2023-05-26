import { atom } from "nanostores";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { produce } from "immer";

type THistory = {
  idx: number;
  pathname: string;
};

export const histories = atom<THistory[]>([]);

export const useRecordHistories = () => {
  const location = useLocation();

  useEffect(() => {
    histories.set(
      produce((e) => {
        e.push({
          idx: e[e.length - 1]?.idx || 0,
          pathname: location.pathname,
        });
      })(histories.get())
    );
  }, [location]);
};
