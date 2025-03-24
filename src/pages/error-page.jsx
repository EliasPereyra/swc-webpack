import { Link, useRouteError } from "react-router-dom";

import "./error.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
      <p>
        <Link to="/">Go back</Link> to the home page
      </p>
    </div>
  );
}
