import React, { useEffect } from "react";
import { useHomeContext } from "../providers/HomeStoreProvider";

function Component1() {
  const { count, setCount } = useHomeContext();

  useEffect(() => {
    setCount(100);
  }, []);

  return <div>Component1 ({count})</div>;
}

export default Component1;
