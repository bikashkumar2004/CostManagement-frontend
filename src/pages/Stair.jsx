import React, { useState } from "react";

export default function Stair() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [slabThickness, setSlabThickness] = useState("");
  const [concreteGrade, setConcreteGrade] = useState("M20");
  const [results, setResults] = useState(null);

  const calculate = () => {
    const widthVal = parseFloat(width);
    const heightVal = parseFloat(height);
    const thicknessVal = parseFloat(slabThickness);

    const concreteGrades = {
      M20: { cement: 320, sand: 800, aggregate: 1600 },
      M25: { cement: 340, sand: 780, aggregate: 1560 },
      M30: { cement: 360, sand: 760, aggregate: 1520 },
    };

    const grade = concreteGrades[concreteGrade];
    if (!grade) {
      alert("Concrete grade not recognized. Please enter a valid grade.");
      return;
    }

    const riserHeight = 0.18;
    const treadDepth = 0.30;

    const numberOfRisers = Math.ceil(heightVal / riserHeight);
    const numberOfTreads = numberOfRisers - 1;

    const stairVolume =
      widthVal * treadDepth * (thicknessVal + heightVal / numberOfRisers);

    const cementQuantity = grade.cement * stairVolume;
    const sandQuantity = grade.sand * stairVolume;
    const aggregateQuantity = grade.aggregate * stairVolume;

    setResults({
      numberOfRisers,
      numberOfTreads,
      stairVolume: stairVolume.toFixed(2),
      cement: cementQuantity.toFixed(2),
      sand: sandQuantity.toFixed(2),
      aggregate: aggregateQuantity.toFixed(2),
    });
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="max-w-lg mx-auto w-[50vw] p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Staircase Calculator</h1>

      <div className="mb-4">
        <label className="block mb-1">Width of Stair (m):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          step="0.01"
          className="w-full p-2 border"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Height of Stair (m):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          step="0.01"
          className="w-full p-2 border"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Thickness of Waist Slab (m):</label>
        <input
          type="number"
          value={slabThickness}
          onChange={(e) => setSlabThickness(e.target.value)}
          step="0.01"
          className="w-full p-2 border"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Grade of Concrete:</label>
        <select
          value={concreteGrade}
          onChange={(e) => setConcreteGrade(e.target.value)}
          className="w-full p-2 border"
        >
          <option value="M20">M20</option>
          <option value="M25">M25</option>
          <option value="M30">M30</option>
        </select>
      </div>

      <button
        onClick={calculate}
        className="bg-red-600 text-white px-4 py-2 rounded shadow-md"
      >
        Calculate
      </button>

      {results && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Results:</h2>
          <p>Number of Risers: {results.numberOfRisers}</p>
          <p>Number of Treads: {results.numberOfTreads}</p>
          <p>Volume of Concrete: {results.stairVolume} m³</p>
          <p>Quantity of Cement: {results.cement} kg</p>
          <p>Quantity of Sand: {results.sand} kg</p>
          <p>Quantity of Aggregate: {results.aggregate} kg</p>
        </div>
      )}
    </div>
    </div>
    
  );
}
