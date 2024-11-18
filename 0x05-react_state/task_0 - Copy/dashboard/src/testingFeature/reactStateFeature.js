import React, {useState} from "react";

const ReactStateFunctionTest = () => {
    const [emotion, setEmotion] = useState("happy");
  return (
    <>
      <h1>Hello world i'm {emotion}</h1>
      <button onClick={() => setEmotion("Sad")}>click to be sad</button>
      <button onClick={() => setEmotion("Happy")}>click to be happy</button>
    </>
  );
};

export default ReactStateFunctionTest;