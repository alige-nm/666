import React, { useState } from "react";
import Identity from "./components/Identity.js";
import Wealth from "./components/Wealth.js";
import Script from "./components/Script.js";
import Tasks from "./components/Tasks.js";
import Diary from "./components/Diary.js";

export default function App() {
  const [page, setPage] = useState("identity");
  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <nav style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button onClick={() => setPage("identity")}>身份卡</button>
        <button onClick={() => setPage("wealth")}>财富支票</button>
        <button onClick={() => setPage("script")}>新剧本</button>
        <button onClick={() => setPage("tasks")}>任务</button>
        <button onClick={() => setPage("diary")}>打卡</button>
      </nav>

      {page === "identity" && <Identity />}
      {page === "wealth" && <Wealth />}
      {page === "script" && <Script />}
      {page === "tasks" && <Tasks />}
      {page === "diary" && <Diary />}
    </div>
  );
}
