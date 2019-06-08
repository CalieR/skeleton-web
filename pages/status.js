import Link from "next/link";
import fetch from "isomorphic-unfetch";

const headers = { "Content-Type": "application/json" };
const API_BASE_URL = "https://powerful-stream-53019.herokuapp.com";
console.log(API_BASE_URL);
const Status = props => (
  <>
    <h1>{props.result}</h1>
  </>
);

const getHealthCheck = async () => {
  let healthUrl = `${API_BASE_URL}/api/health/ping`;
  let res = await fetch(healthUrl, {
    headers
  });
  let data = await res.json();

  return {
    result: data.result
  };
};

Status.getInitialProps = () => {
  return getHealthCheck();
};

export default Status;
