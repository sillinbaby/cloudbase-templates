import React, { useState } from "react";
import { getApp } from "../../tcb";
import "./index.css";

export default function Hello() {
  const app = getApp();
  const [callFunctionResult, setCallFunctionResult] = useState("");

  const callFunction = async () => {
    try {
      const res = await app.callFunction({
        name: "helloworld",
        data: {
          foo: "bar",
        },
      });
      setCallFunctionResult(JSON.stringify(res));
    } catch (e) {
      setCallFunctionResult(e.message);
    }
  };

  return (
    <div className="hello">
      <h1>欢迎使用云开发 CloudBase React App</h1>
      <div>

        <h2>调用云函数</h2>
        <p>
          点击
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              callFunction();
            }}
          >
            调用 hello world 云函数
          </a>
        </p>
        <p>
          <b>云函数执行结果</b>
        </p>
        <p>{callFunctionResult}</p>
      </div>
    </div>
  );
}
