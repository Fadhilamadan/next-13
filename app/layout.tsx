import { ReactNode } from "react";
import Link from "next/link";

import Providers from "./providers";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next 13</title>
      </head>

      <body>
        <div style={{ textAlign: "center", display: "grid", gridGap: 10 }}>
          <Link href="/client">Client</Link>
          <Link href="/server">Server</Link>
          <Link href="/mixmatch">Mix Match</Link>
          <Link href="/degenerate">Degenerate</Link>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
