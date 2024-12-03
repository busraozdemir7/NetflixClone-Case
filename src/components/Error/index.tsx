import { FC } from "react";


type ErrorProps = {
  message: string;
};

const Error: FC<ErrorProps> = ({ message }) => {
  return <div className="text-red-500">{message}</div>;
};

export default Error;

