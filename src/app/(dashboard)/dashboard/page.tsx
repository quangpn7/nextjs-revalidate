import RealTime from "@/components/RealTime/RealTime";
import FormField from "@/components/form/FormField";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="display-3">Dashboard</div>
      <RealTime />
      <div>
        <Link href="/" passHref>
          <button className="btn btn-warning">Home</button>
        </Link>
      </div>
      <FormField />
    </>
  );
};

export default Dashboard;
