export default function Server() {
  console.log(
    "Server page rendering: this should only be printed on the server"
  );

  return (
    <div>
      <h1>Server Page</h1>
      <p>My secret key: {process.env.SECRET_KEY}</p>
    </div>
  );
}
