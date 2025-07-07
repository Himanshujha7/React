
import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1 className="font-bold flex items-center justify-center text-3xl text-center mt-10 p-10 text-slate-700 ">Oops! Somethin went wrong!</h1>
      <h3>{err.status} </h3>
    </div>
  )
}

export default Error