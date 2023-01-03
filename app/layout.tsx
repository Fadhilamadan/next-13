import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body>
        <div
          style={{
            width: "100%",
            height: "25vh",
            backgroundColor: "red",
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          From layout
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
