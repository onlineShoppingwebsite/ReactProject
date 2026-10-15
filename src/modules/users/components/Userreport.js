import React from "react";
import Childpage from "./Childpage";
function Userreport() {
  const username = "Shifa ravi";
  const msg = () => {
    alert("welcome to props drilling");
  };

  return (
    <div>
      Userreport
      <Childpage xyz={username} myfunc={msg}></Childpage>
    </div>
  );
}

export default Userreport;
