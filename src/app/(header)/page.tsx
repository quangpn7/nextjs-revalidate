import Header from "@/components/template/Header";
import { getTime } from "@/utils/helper/helper";
import React from "react";

const HeaderSSR = async () => {
  const result = await getTime();

  return (
    <div>
      <Header result={result} />
    </div>
  );
};

export default HeaderSSR;
