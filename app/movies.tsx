"use client";

import { Fragment } from "react";
import { useMovies } from "../utils/api/movies";

export default function Movies() {
  const { data } = useMovies();

  return (
    <>
      {data?.data.map((item: any, i: number) => (
        <Fragment key={i}>
          <p>{item.Title}</p>
          <div>{item.Year}</div>
          <br />
        </Fragment>
      ))}
    </>
  );
}
