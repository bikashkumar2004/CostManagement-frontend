import React, { useState } from "react";

export default function Plaster() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("0.01");
  const [plasterType, setPlasterType] = useState("1:3");
  const [results, setResults] = useState({ area: 0, cement: 0, sand: 0 });

  const calculate = () => {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const thickness = parseFloat(document.getElementById('thickness').value);
    const plasterType = document.getElementById('plasterType').value;

    const area = length * width;
    const volume = area * thickness;

    const [cementRatio, sandRatio] = plasterType.split(":").map(Number);
    const totalRatio = cementRatio + sandRatio;

    const cementVolume = volume * (cementRatio / totalRatio);
    const sandVolume = volume * (sandRatio / totalRatio);

    const cementQuantity = cementVolume * 1440;
    const sandQuantity = sandVolume * 1600;

    document.getElementById('area').textContent = area.toFixed(2);
    document.getElementById('cement').textContent = cementQuantity.toFixed(2);
    document.getElementById('sand').textContent = sandQuantity.toFixed(2);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Plastering Material Calculation</h1>
      <div className="mb-4">
        <label className="block mb-1">Length (meters):</label>
        <input
          type="number"
          id="length"
          step="0.01"
          className="w-full p-2 border"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Width (meters):</label>
        <input
          type="number"
          id="width"
          step="0.01"
          className="w-full p-2 border"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Thickness (meters):</label>
        <input
          type="number"
          id="thickness"
          step="0.01"
          className="w-full p-2 border"
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Plaster Type:</label>
        <select
          id="plasterType"
          className="w-full p-2 border"
          value={plasterType}
          onChange={(e) => setPlasterType(e.target.value)}
        >
          <option value="1:3">Cement plaster (1:3)</option>
          <option value="1:4">Cement plaster (1:4)</option>
          <option value="1:5">Cement plaster (1:5)</option>
          <option value="1:6">Cement plaster (1:6)</option>
        </select>
      </div>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded shadow-md"
        onClick={calculate}
      >
        Calculate
      </button>

      <div className="results mt-6">
        <h2 className="text-xl font-semibold mb-2">Results:</h2>
        <p>Total Area: <span id="area">0</span> square meters</p>
        <p>Cement Quantity: <span id="cement">0</span> kg</p>
        <p>Sand Quantity: <span id="sand">0</span> kg</p>
      </div>
    </div>
  );
}