import moment from "moment/moment";

export default function Main() {
  return (
    <>
      <h1>Old Router</h1>
      <p>Time: {moment().format()}</p>
    </>
  );
}
