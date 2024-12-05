import { FC } from "react";

type PropsType = {
  children: string;
};

const Title: FC<PropsType> = ({ children }) => {
  return <h1 className="text-xl font-bold mb-5">{children}</h1>;
};

export default Title;
