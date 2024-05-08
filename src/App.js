import React from "react";
import { Index } from "./compunet/main/Index";
import { Indexs } from "./compunet/second/Indexs";

import "./asset/main/Indext.css";

export const App = () => {
  return (
    <div>
      <div className="test">
        <div className="one">
          <Index />
        </div>
        <div className="tow">
          <Indexs />
        </div>
      </div>
    </div>
  );
};
