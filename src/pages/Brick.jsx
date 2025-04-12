import React, { useState } from "react";

const Brick = () => {
  const [inputs, setInputs] = useState({
    wallLength: "",
    wallHeight: "",
    brickLength: "",
    brickHeight: "",
    mortarGap: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const calculateBricks = () => {
    const wallLength = parseFloat(inputs.wallLength);
    const wallHeight = parseFloat(inputs.wallHeight);
    const brickLength = parseFloat(inputs.brickLength);
    const brickHeight = parseFloat(inputs.brickHeight);
    const mortarGap = parseFloat(inputs.mortarGap);

    if (
      isNaN(wallLength) ||
      isNaN(wallHeight) ||
      isNaN(brickLength) ||
      isNaN(brickHeight) ||
      isNaN(mortarGap)
    ) {
      setResult(
        `<p style="color: red;">Please enter valid numbers for all fields.</p>`
      );
      return;
    }

    const wallLengthCm = wallLength * 100;
    const wallHeightCm = wallHeight * 100;
    const mortarGapCm = mortarGap / 10;
    const brickLengthWithMortar = brickLength + mortarGapCm;
    const brickHeightWithMortar = brickHeight + mortarGapCm;

    const brickArea = brickLengthWithMortar * brickHeightWithMortar;
    const wallArea = wallLengthCm * wallHeightCm;
    const numberOfBricks = Math.ceil(wallArea / brickArea);

    const resultHTML = `
      <h3>Calculation Details:</h3>
      <p><strong>1. Wall Dimensions:</strong> ${wallLength.toFixed(
        2
      )} meters x ${wallHeight.toFixed(2)} meters</p>
      <p><strong>2. Wall Area:</strong> ${wallArea.toFixed(
        2
      )} square centimeters</p>
      <p><strong>3. Mortar Gap Conversion:</strong> ${mortarGap.toFixed(
        2
      )} mm = ${mortarGapCm.toFixed(2)} cm</p>
      <p><strong>4. Brick Dimensions (including mortar):</strong> 
        <ul>
          <li>Brick Length: ${brickLength.toFixed(
            2
          )} cm + ${mortarGapCm.toFixed(
      2
    )} cm = ${brickLengthWithMortar.toFixed(2)} cm</li>
          <li>Brick Height: ${brickHeight.toFixed(
            2
          )} cm + ${mortarGapCm.toFixed(
      2
    )} cm = ${brickHeightWithMortar.toFixed(2)} cm</li>
        </ul>
      </p>
      <p><strong>5. Brick Area (including mortar):</strong> ${brickLengthWithMortar.toFixed(
        2
      )} cm x ${brickHeightWithMortar.toFixed(2)} cm = ${brickArea.toFixed(
      2
    )} square centimeters</p>
      <p><strong>6. Number of Bricks Needed:</strong> ${wallArea.toFixed(
        2
      )} / ${brickArea.toFixed(2)} = ${numberOfBricks}</p>
    `;

    setResult(resultHTML);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="brick-calculator p-4 max-w-xl mx-auto ">
        <h2 className="text-xl font-bold mb-4">Brick Calculator</h2>
        <form className="flex flex-col gap-4">
          <label>
            Wall Length (meters):
            <input
              type="number"
              id="wallLength"
              step="0.01"
              value={inputs.wallLength}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
          </label>

          <label>
            Wall Height (meters):
            <input
              type="number"
              id="wallHeight"
              step="0.01"
              value={inputs.wallHeight}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
          </label>

          <label>
            Brick Length (centimeters):
            <input
              type="number"
              id="brickLength"
              step="0.1"
              value={inputs.brickLength}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
          </label>

          <label>
            Brick Height (centimeters):
            <input
              type="number"
              id="brickHeight"
              step="0.1"
              value={inputs.brickHeight}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
          </label>

          <label>
            Mortar Gap (millimeters):
            <input
              type="number"
              id="mortarGap"
              step="0.1"
              value={inputs.mortarGap}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
          </label>

          <button
            type="button"
            onClick={calculateBricks}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Calculate Bricks
          </button>
        </form>

        <div
          className="result mt-6 bg-gray-100 p-4 rounded"
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </div>
    </div>
  );
};

export default Brick;
