import "bootstrap/dist/css/bootstrap.min.css";
import LayoutProvider from "./LayoutProvider";
import { FC } from "react";
import { time } from "console";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

type RootLayoutType = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutType> = ({ children }) => {
  return (
    <html>
      <body className="FXCE-body">
        <LayoutProvider>
          <div
            style={{
              minHeight: "calc( 100vh - 100px )",
            }}
          >
            {children}
          </div>
        </LayoutProvider>
      </body>
    </html>
  );
};

export default RootLayout;
