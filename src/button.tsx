import { useState } from "react";

export const Button = () => {
  const [state, setState] = useState<number | null>(null);

  const array = Array.from({ length: 9 }, (_, index) => {
    return (
      <li
        onClick={() => setState(index)}
        key={index}
        className={`listItem ${state === index ? "active" : ""}`}
      >
        {index}
      </li>
    );
  });

  return (
    <>
      <div className="checkForm">
        <div className="checkDiv">
          <input type="checkbox" className="checkInput" />
        </div>
      </div>
      <div className="buttonContainer">
        <ul className="list">{array}</ul>
      </div>
    </>
  );
};
