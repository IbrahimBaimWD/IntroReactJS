import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

const StateGlobal = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("redux ==>", count);
  const [local, setLocal] = useState("rendom");
  const { theme, setTheme } = useContext(ThemeContext);
  function localSetData() {
    localStorage.setItem("name", "Testing");
  }
  function localGetData() {
    setLocal(localStorage.getItem("name"));
  }
  function localRemoveData() {
    setLocal(localStorage.removeItem("name"));
  }
  function sessionRemoveData() {
    sessionStorage.setItem("key", "value");
  }
  return (
    <>
      <div style={{ padding: 32, background: "#FFFFF5" }}>
        <h1>Data Contex</h1>
        <button onClick={() => setTheme("Light")}>{theme}</button>
      </div>
      <div style={{ padding: 32, background: "#5566FF" }}>
        <h1>Data Local : {local}</h1>
        <button onClick={localSetData}>Set Data Local Storage</button>
        <button onClick={localGetData}>Get Data Local Storage</button>
        <button onClick={localRemoveData}>Remove Local Storage</button>
      </div>
      <div style={{ padding: 32, background: "#FF5566" }}>
        <h1>Data Session</h1>
        <button onClick={sessionRemoveData}>Session Storage</button>
      </div>

      <div style={{ padding: 32, background: "#FFF566" }}>
        <h1>Data Redux</h1>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <span>{count}</span>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
      {/* <ThemeContext.Consumer>
        {(theme) => <button>{theme}</button>}
      </ThemeContext.Consumer> */}
    </>
  );
};

export default StateGlobal;
