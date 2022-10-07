import React, { useState } from 'react';

function App() {
  const [fortune, changeFortune] = useState({
    currentFortune: '',
    fortuneArr: ['first', 'second', 'third'],
    additionalFortune: '',
  });

  const showFortune = () => {
    let arr = fortune.fortuneArr;
    let math = Math.floor(Math.random() * arr.length);

    changeFortune({
      ...fortune,
      currentFortune: `${fortune.fortuneArr[math]}`,
    });
  };

  const addFortune = () => {
    changeFortune({
      ...fortune,
      fortuneArr: [...fortune.fortuneArr, fortune.additionalFortune],
      additionalFortune: '',
    });
  };

  const addFortuneText = (e) => {
    changeFortune({
      ...fortune,
      additionalFortune: e.target.value,
    });
  };

  return (
    <div className="App">
      <button onClick={showFortune}>Make a wish and click </button>
      <br />
      <label>
        <input
          type="text"
          name="text"
          onChange={addFortuneText}
          value={fortune.additionalFortune}
        />
        <button onClick={addFortune}>Add your guess</button>
      </label>

      <p>{fortune.currentFortune}</p>
    </div>
  );
}

export default App;
