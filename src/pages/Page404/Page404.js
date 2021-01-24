import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <Link to="/">
        <i className="fas fa-arrow-left"></i> <span> Back to Home </span>
      </Link>
    </div>
  );
};

export default Page404;
