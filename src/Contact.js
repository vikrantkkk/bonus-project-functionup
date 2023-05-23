import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Contact() {
  const [inputValue, setInputValue] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const getData = localStorage.getItem("data");
  const getNewData = JSON.parse(getData);
  const [data, setData] = useState(getNewData || []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue(
      (prevInputValue) => ({
        ...prevInputValue,
        [name]: value,
      })
      // { ...inputValue, [name]: value }
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setData([...data, inputValue]);
    setInputValue({
      name: "",
      lastname: "",
      email: "",
      phone: "",
    });
  };
  const hanldeRemoveLOcalStorage = () => {
    localStorage.removeItem("data");
    setData([])
  };

  return (
    <div>
      <Navbar />
      <h1>Contact</h1>
      <form onSubmit={onSubmit}>
        <input
          value={inputValue.name}
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          value={inputValue.lastname}
          name="lastname"
          type="text"
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          value={inputValue.email}
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          value={inputValue.phone}
          name="phone"
          type="number"
          onChange={handleChange}
          placeholder="Phone No"
        />
        <button onClick={onSubmit}>submit</button>
      </form>
      <button onClick={hanldeRemoveLOcalStorage}>clear</button>
    </div>
  );
}
