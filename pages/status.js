import Link from "next/link";
import fetch from "isomorphic-unfetch";

const headers = { "Content-Type": "application/json" };

const Status = props => (
  <>
    <h1>{props.result}</h1>
  </>
);

const getHealthCheck = async () => {
  let res = await fetch("http://localhost:3002/api/health/ping", {
    headers
  })
  let data = await res.json()

  return {
    result: data.result
  }

};

Status.getInitialProps = () => {
  return getHealthCheck()
};

export default Status;
