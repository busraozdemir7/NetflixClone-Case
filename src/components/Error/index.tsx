import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { FC } from "react";


type PropsType = {
  data: FetchBaseQueryError | SerializedError
};

const Error: FC<PropsType> = ({ data }) => {
  const msg = (data as FetchBaseQueryError).status;

  return <div className="text-red-500">
    <h1>There was ana error fetching data :(</h1>
    <h1>{msg}</h1>
  </div>;
};

export default Error;

