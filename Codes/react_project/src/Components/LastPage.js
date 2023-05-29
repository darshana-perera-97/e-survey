import React from "react";
import { dataStore } from "../Data/DataHandle";

export default function LastPage(prop) {
  return (
    <div>
      <p>Thank you</p>
      <button
        onClick={() => {
          dataStore(prop.ans);
          console.log(prop.ans);
        }}
      >
        s
      </button>
    </div>
  );
}
