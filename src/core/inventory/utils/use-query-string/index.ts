import { useEffect, useState } from "react";
import querystring from "query-string";
import { Draft, produce } from "immer";
import { useSearchParams } from "react-router-dom";

/*
  先寫個精簡版(待測)
 */
export const useQueryString = <T extends Record<string, any>>() => {
  const [, setSearchParams] = useSearchParams();
  const [state, setState] = useState<T>(
    // () => querystring.parse(location.search) as T
    () => querystring.parse("?name=frank&age=18") as T
  );

  const get = (key: keyof T) => {
    return state[key];
  };

  const set = <K extends keyof Draft<T>>(
    key: keyof Draft<T>,
    value: Draft<T>[K]
  ) => {
    setState(
      produce<T>((ds) => {
        ds[key] = value;
      })
    );
  };

  const update = (state: T) => {
    setState(state);
  };

  useEffect(() => {
    setSearchParams(
      querystring.stringify(state, {
        arrayFormat: "comma",
        skipNull: true,
        skipEmptyString: true,
      }),
      {
        replace: true,
      }
    );
  }, [state]);

  return {
    get,
    set,
    update,
  };
};
