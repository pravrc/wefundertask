import React from "react";
import "./App.css";
import { Typography } from "@material-ui/core";

import UploadFiles from "./components/upload-files.component";

function App() {
  return (
    <div className="container">
      <div  class="mg20">
        <Typography variant="h2">WEFUNDER</Typography>
      </div>

      <UploadFiles />
    </div>
  );
}

export default App;
