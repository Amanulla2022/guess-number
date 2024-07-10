import React, { useState } from "react";

const Guess = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [random, setRandom] = useState(Math.floor(Math.random() * 100 + 1));

  const handleCheck = () => {
    const numValue = parseInt(value);
    if (isNaN(numValue)) {
      setMessage("Please enter a valid number");
      return;
    }
    if (numValue > random) {
      setMessage("Your guess is too high");
    } else if (numValue < random) {
      setMessage("Your guess is too low");
    } else {
      setMessage("You guessed correctly!");
    }
  };

  const handleReset = () => {
    setValue("");
    setMessage("");
    setRandom(Math.floor(Math.random() * 100 + 1));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-4">
      <h1 className="text-3xl font-semibold">Guess The Number</h1>
      <p>Guess a Number between 0 and 100</p>
      <input
        type="number"
        className="border-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex gap-4">
        <button className="bg-gray-600 text-white p-2" onClick={handleReset}>
          Reset
        </button>
        <button className="bg-gray-600 text-white p-2" onClick={handleCheck}>
          Check
        </button>
      </div>
      <p className="text-xl">{message}</p>
    </div>
  );
};

export default Guess;
