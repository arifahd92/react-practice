import React, { useState, useEffect } from "react";

export default function SellerPage() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState({
    id: "",
    name: "",
    price: "",
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    let bdata = JSON.parse(localStorage.getItem("totalData"));
    if (bdata != null) {
      let totalamount = 0;
      bdata.forEach((element) => {
        totalamount += +element.price;
      });
      setData(bdata);
      setTotal(totalamount);
    } else {
    }
  }, []);
  let name = "";
  const changeHandler = (e) => {
    let value = e.target.value;
    name = e.target.name;
    setItem({ ...item, [name]: value });
  };
  function updateAmount(data) {
    let totalamount = 0
    data.forEach((item) => {
      totalamount += +item.price;
    })
    setTotal(totalamount)
  }
  const deleteHandeler = (ind) => {
    let datas = JSON.parse(localStorage.getItem("totalData"));
    let filteredData = datas.filter((item, index) => ind !== index);
    localStorage.setItem("totalData", JSON.stringify(filteredData));
    updateAmount(filteredData)
    setData(filteredData);
  };
  const addItem = () => {
    if (item.id && item.name && item.price) {
      console.log("all are filled");

      let alldata = JSON.parse(localStorage.getItem("totalData"));
      console.log(alldata);
      if (alldata != null) {
        let totalData = [...alldata, item];
        localStorage.setItem("totalData", JSON.stringify(totalData));
        updateAmount(totalData)
        setData(totalData);
        setItem({
          id: "",
          name: "",
          price: "",
        });
      } else {
        let totalData = [item];
        localStorage.setItem("totalData", JSON.stringify(totalData));
        updateAmount(totalData)
        setData(totalData);
        setItem({
          id: "",
          name: "",
          price: "",
        });
      }
    }
  };

  return (
    <div className="container">
      <div class="row">
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">uuu</h4>
          <p>gtuu</p>
          <p class="mb-0"></p>
        </div>
      </div>
      <input
        type="number"
        value={item.id}
        onChange={changeHandler}
        name="id"
        id="id"
        placeholder="id"
      />
      <br />
      <input
        type="text"
        value={item.name}
        onChange={changeHandler}
        name="name"
        placeholder="product name"
      />
      <br />
      <input
        type="number"
        value={item.price}
        onChange={changeHandler}
        name="price"
        placeholder="price"
      />
      <button onClick={addItem}>add Item</button>
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <>
              <p key={index}>
                {`id ${item.id}  name ${item.name} price ${item.price}`}{" "}
                <button onClick={() => deleteHandeler(index)}>delete</button>
              </p>
            </>
          );
        })}
      {data.length == 0 && <div>total amount : 0</div>}
      {data.length > 0 && <div>total amount :{total} </div>}
    </div>
  );
}
