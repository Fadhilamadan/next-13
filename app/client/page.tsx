"use client";

import { useEffect } from "react";
import moment from "moment";

export default function Client() {
  console.log(
    "Client page rendering: this should only be printed on the server during ssr, and client when routing"
  );

  useEffect(() => {
    console.log("Client component rendered");
  });

  return (
    <div>
      <h1>Client Page</h1>
      <p>Time: {moment().format()}</p>
      {/* Uncommenting this will result in an error complaining about inconsistent rendering between client and server, which is very true */}
      {/* <p>My secret env: {process.env.SECRET_KEY}</p> */}
    </div>
  );
}
