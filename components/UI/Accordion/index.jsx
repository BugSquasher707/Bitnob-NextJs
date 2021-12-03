import React, { useState } from "react";
import { Caret } from "public";

const Accordion = (props) => {
  const { question, answer, className } = props;

  const [active, setActive] = useState(false);

  const handleOpenClicked = () => setActive(!active);

  return (
    <div
      className={`flex items-center justify-between ${className} ${
        active && "pb-5 border-b-2 border-bitGray-600"
      }`}
    >
      <div className="w-4/5">
        <button
          className={`font-bold text-left ${
            active ? "text-bitGreen-500" : "text-bitGray-500"
          }`}
          onClick={handleOpenClicked}
        >
          {question}
        </button>

        <div
          className={`mt-2 overflow-hidden transition-opacity duration-200 ease-out ${
            active ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          <p>{answer}</p>
        </div>
      </div>

      <Caret active={active} />
    </div>
  );
};

export default Accordion;
