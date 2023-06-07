import React, { useState } from "react";

export default function Todo() {
  const [data, setdata] = useState([]);
  const [input, setinput] = useState("");
  const [disabled, setDisabled] = useState(false);
  function additem() {
    console.log("i got called");
    if (input.trim().length == 0) {
      setdata([...data, input]);
      setinput("");
    }
  }

  function deletedata(ind) {
    let newdata = data.filter((elm, indexx) => indexx != ind);
    setdata(newdata);
  }
  if (input.trim().length == 0) {
    setDisabled(true);
  } else {
    setDisabled(false);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <form action="form-group"></form>
          <input
            className="form-control col-4"
            onChange={(e) => setinput(e.target.value)}
            value={input}
            type="text"
            name=""
            id=""
          />
          <button
            className="btn btn-sm btn-outline-success col-4 "
            onClick={additem}
          >
            add
          </button>
        </div>
      </div>

      {data.map((elm, ind) => {
        return (
          <>
            <div className="container">
              <div className="row">
                <div
                  className="col-8 "
                  key={ind}
                  onDoubleClick={() => deletedata(ind)}
                >
                  {elm}
                </div>

                <button className="col-4 btn btn-sm btn-outline-danger">
                  delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
