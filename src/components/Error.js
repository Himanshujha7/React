
import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>Oops! Somethin went wrong!</h1>
      <h3>{err.status} </h3>
    </div>
  )
}

export default Error