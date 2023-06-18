"use client";

import { useState } from "react";

async function test() {
  return {
    hello: 1111
  }
}

function Comx({start}: {start: number}) {
  const [count, setCount] = useState(start)

  return <button onClick={() => setCount(x => x+1)}>click: {count}</button>
}

export default async function Index() {
  const data = await test();

  return (
    <div>
      <h1>hello, {data.hello}</h1>
      <Comx start={data.hello}/>
    </div>
  );
}
