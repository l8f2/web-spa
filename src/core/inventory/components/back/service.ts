import { useNavigate } from "react-router-dom";

export type TProps = {
  histories?: { idx: number }[];
};

export const useBackService = ({ histories }: TProps) => {
  const navigate = useNavigate();
  const back = () => {
    console.log(histories);
    navigate(-1);
  };

  return {
    back,
  };
};
