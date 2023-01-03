"use client";

import { ReactNode } from "react";

export default function Client({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) {
  console.log("Client component rendering");

  return (
    <>
      <h2>Client Child</h2>
      <p>Message from parent: {message}</p>
      <div style={{ border: "1px solid red", padding: 10 }}>{children}</div>
    </>
  );
}
