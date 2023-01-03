import Client from "./client";

export default function DegeneratePage() {
  console.log("Degenerated page rendering");

  return (
    <>
      <h1>Degenerated Page</h1>
      <div style={{ border: "1px solid blue", padding: 10 }}>
        <Client message="A message from server" />
      </div>
    </>
  );
}
