import React, { useState } from "react";

export default function Flooring() {
  const [unit, setUnit] = useState("feet");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [tileLength, setTileLength] = useState("");
  const [tileWidth, setTileWidth] = useState("");
  const [thickness, setThickness] = useState(1);
  const [result, setResult] = useState("");

  const calculateFlooring = () => {
    const unit = document.getElementById("unit").value;
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const tileLength = parseFloat(document.getElementById("tileLength").value);
    const tileWidth = parseFloat(document.getElementById("tileWidth").value);
    const thickness =
      parseFloat(document.getElementById("thickness").value) / 100;

    if (
      isNaN(length) ||
      isNaN(width) ||
      isNaN(tileLength) ||
      isNaN(tileWidth) ||
      isNaN(thickness)
    ) {
      alert("Please enter valid numbers.");
      return;
    }

    const roomArea = length * width;
    const tileArea = tileLength * tileWidth;
    const numberOfTiles = roomArea / tileArea;
    const cementContent = roomArea * thickness;
    const sandContent = roomArea * thickness;
    const cementContentKg = cementContent * 1440;
    const sandContentKg = sandContent * 1600;

    setResult(
      `<h2>Result:</h2>
      <p>Total Area of Flooring: ${roomArea.toFixed(2)} square ${unit}</p>
      <p>Cement Content: ${cementContentKg.toFixed(2)} kg</p>
      <p>Sand Content: ${sandContentKg.toFixed(2)} kg</p>
      <p>Tile Quantity: ${Math.ceil(numberOfTiles)} tiles</p>`
    );
  };

  const resetForm = () => {
    document.getElementById("unit").value = "feet";
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("tileLength").value = "";
    document.getElementById("tileWidth").value = "";
    document.getElementById("thickness").value = "1";
    setResult("");
  };

  return (
    <div>
      <div className="max-w-xl mx-auto bg-white p-6 shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">
          Flooring Calculator (Tiles Calculator)
        </h1>
        <div className="mb-4">
          <label className="block mb-1">Unit of Measurement:</label>
          <select id="unit" className="w-full p-2 border" defaultValue={unit}>
            <option value="feet">Feet</option>
            <option value="meters">Meters</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Room Length:</label>
          <input
            id="length"
            type="number"
            className="w-full p-2 border"
            placeholder="Enter room length"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Room Width:</label>
          <input
            id="width"
            type="number"
            className="w-full p-2 border"
            placeholder="Enter room width"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Tile Length:</label>
          <input
            id="tileLength"
            type="number"
            className="w-full p-2 border"
            placeholder="Enter tile length"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Tile Width:</label>
          <input
            id="tileWidth"
            type="number"
            className="w-full p-2 border"
            placeholder="Enter tile width"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">
            Thickness of Cement/Sand Layer (cm):
          </label>
          <input
            id="thickness"
            type="number"
            className="w-full p-2 border"
            defaultValue={thickness}
            placeholder="Enter thickness in cm"
          />
        </div>
        <div className="flex gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={calculateFlooring}
          >
            Calculate
          </button>
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: result }}
        ></div>
      </div>
    </div>
  );
}
