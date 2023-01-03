import Client from "./client";
import NestedServer from "./nested-server";

export default function MixMatchPage() {
  console.log("MixMatchPage rendering");

  return (
    <>
      <h1>Mix Match Page</h1>
      <div style={{ border: "1px solid blue", padding: 10 }}>
        <Client message="A message from server">
          <NestedServer />
        </Client>
      </div>
    </>
  );
}
