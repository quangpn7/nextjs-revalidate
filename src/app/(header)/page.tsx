import Header from "@/components/template/Header";
import { getTime } from "@/utils/helper/helper";
import React from "react";

import colors from "colors";
colors.enable();

const HeaderSSR = async () => {
  const result = await getTime();
  console.log("Header Generating".red.bgBlue.bold);

  return (
    <div>
      <Header result={result} />
    </div>
  );
};

export default HeaderSSR;
