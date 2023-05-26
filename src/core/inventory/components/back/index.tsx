import {
  TProps as TBackServiceProps,
  useBackService,
} from "@/core/inventory/components/back/service.ts";
import clsx from "clsx";

type TProps = {
  className?: string;
} & TBackServiceProps;

export const BackComponent = ({ className, histories }: TProps) => {
  const { back } = useBackService({ histories });

  return (
    <span className={clsx(className, "cursor-pointer")} onClick={back}>
      返回
    </span>
  );
};
