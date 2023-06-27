import React, { memo } from "react";

// const getTime = async () => {
//   try {
//     const response = await fetch(
//       "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Bangkok"
//     );
//     return response.json();
//   } catch (error) {
//     return {};
//   }
// };

const Header = async ({ result }) => {
  return (
    <div
      className="w-100 bg-danger text-white"
      style={{
        height: "50px",
        lineHeight: "50px",
        display: "flex",
      }}
    >
      <div>Header</div>

      <div className="ms-5">
        {`${result?.hour}:${result?.minute}:${result?.seconds}`}
      </div>
      <div className="mx-5">---</div>
      <div>didMount: # {new Date().getTime().toString().slice(-4)}</div>
      <div className="mx-5">---</div>
      <div>SSR HEADER</div>
    </div>
  );
};
export default memo(Header);
