import React, { useEffect, useMemo, useRef, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [testValue, setTestValue] = useState(1);

  const handlePlus = () => {
    setCounter(counter + step);
  };
  const handleMinus = () => {
    setCounter(counter - step);
  };
  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };
  //..........................................
  //Записуємо в мемо щоб функція оброблялась лише раз до перезавантаження сторінки
  //Треба для оптимізації
  const result = useMemo(() => {
    console.log("Start calc");
    for (let i = 0; i < 100000000; i++) {}
    console.log("End calc");
    return testValue * testValue;
  }, [testValue]);
  //...........................................
  const fileRef = useRef();
  //...........................................
  //Щоб порахувати кількість рендерів
  //(оновлення інтерфейсу: плюс, мінус, що завгодно, шо змінює ситуацію на екрані)
  const renderCountRef = useRef(0);
  useEffect(() => {
    renderCountRef.current++;
    console.log(renderCountRef.current);
  });
  //............................................
  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <h2>{result}</h2>
        <input
          type="text"
          value={step}
          //        Все що ми відправляємо з інпута маємо конвертувати в намбер.
          // (e.target.value) пишу зі знаком +, бо таким чином не відбувається конкатинація чисел,
          //  а це називається "унарний плюс", що робить те саме шо i конструктор number - приводить
          //   рядок до числа
          onChange={(e) => setStep(+e.target.value)}
        />
      </div>
      <button onClick={handlePlus}>plus</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleMinus}>minus</button>
      <button onClick={() => setTestValue((prev) => prev + 1)}>
        SET NEW TEST value
      </button>
      {/* Робим клік на інпут через кнопку */}
      <button onClick={() => fileRef.current.click()}>Open file</button>
      <input ref={fileRef} style={{ visibility: "hidden" }} type="file" />
    </div>
  );
};
export default Counter;
