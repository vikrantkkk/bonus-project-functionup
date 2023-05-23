import React from 'react';
import Navbar from './Navbar'

export default function Home() {
  const getData = localStorage.getItem("data")
  const newData=JSON.parse(getData)
  console.log(newData);
  return (
    <div>
    <Navbar />
    <h1>This is home page</h1>
    {newData.map((item)=>{
      return(
        <>
        <li>{item.name}</li>
        <li>{item.lastname}</li>
        <li>{item.email}</li>
        <li>{item.phone}</li>
        </>
      )
    })}
  </div>
  );
}
