import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="display-3">HomePage</div>
      <div className="my-5 w-50 mx-auto d-flex justify-content-between">
        <Link href="/dashboard">
          <button className="btn btn-success">Dashboard</button>
        </Link>
        <Link href="/login">
          <button className="btn btn-success">Login</button>
        </Link>
        <Link href="/signup">
          <button className="btn btn-success">Sign up</button>
        </Link>
        <Link href="/joke/1">
          <button className="btn btn-success">Joke</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
