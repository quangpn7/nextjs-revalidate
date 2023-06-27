import RealTime from "@/components/RealTime/RealTime";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="display-3">Login page</div>
      <RealTime />
      <div>
        <Link href="/" passHref>
          <button className="btn btn-warning">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
