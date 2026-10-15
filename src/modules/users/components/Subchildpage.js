import React, { useEffect, useState } from "react";
function Subchildpage(props) {
  const [x, y] = useState([]);

  const subc = () => {
    const mydata = JSON.parse(localStorage.getItem("dropdata"));
    console.log(mydata);
    y(mydata);
  };

  useEffect(() => {
    subc();
  }, []);

  return (
    <div className="bg-danger p-3 text-white">
      <p className="h3">Subchildpage</p>
      <button className="btn btn-warning" onClick={props.getfun}>
        Submit
      </button>

      <select className="form-select">
        {x.map((r) => {
          return <option>{r}</option>;
        })}
      </select>
    </div>
  );
}

export default Subchildpage;
