"use client";

import React, { FC, useCallback } from "react";

type FormFieldProps = {};

const FormField: FC<FormFieldProps> = () => {
  const requestNewHeader = useCallback(() => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open(
      "POST",
      `http://localhost:3000/api/revalidate?t=${new Date().getTime()}`,
      false
    ); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }, []);
  return (
    <div className="w-25 mx-auto">
      <div className="mb-3">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name..." />
      </div>
      <div className="mb-3">
        <label htmlFor="age">Age</label>
        <input type="number" placeholder="Age..." />
      </div>
      <div className="mb-3">
        <label htmlFor="address">Address</label>
        <input type="text" placeholder="Address..." />
      </div>
      <div className="mb-3">
        <button onClick={requestNewHeader} className="btn btn-danger display-4">
          REQUEST NEW HEADER
        </button>
      </div>
    </div>
  );
};

export default FormField;
