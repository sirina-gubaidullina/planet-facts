import { useState, useRef } from "react";

const dataChanging = (data) => {
  const [currentData, setCurrentData] = useState(data.overview);
  const prevTab = useRef("overview");
  const isTransitionend = useRef(true);

  const handleClick = (event) => {
    let currTab = event.target.dataset.type;

    if (!isTransitionend.current || prevTab.current === currTab) return false;

    prevTab.current = currTab;

    setCurrentData(data[currTab]);
  };

  return [handleClick, currentData];
};

export default dataChanging;
