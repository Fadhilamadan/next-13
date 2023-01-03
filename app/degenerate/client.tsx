"use client";

import NestedServer from "./nested-server";

export default function Client({ message }: { message: string }) {
  console.log("Client component rendering");

  return (
    <>
      <h2>Client Child</h2>
      <p>Message from parent: {message}</p>
      <div style={{ border: "1px solid red", padding: 10 }}>
        <NestedServer />
      </div>
    </>
  );
}
