import React, { useState } from 'react';

const Roofing = () => {
  const [inputMethod, setInputMethod] = useState('dimensions');
  const [roofLength, setRoofLength] = useState(0);
  const [roofWidth, setRoofWidth] = useState(0);
  const [roofAreaInput, setRoofAreaInput] = useState(0);
  const [pitchMultiplier, setPitchMultiplier] = useState(1);
  const [shingleWidth, setShingleWidth] = useState('');
  const [exposure, setExposure] = useState('');
  const [bundlesPerSquare, setBundlesPerSquare] = useState(3);
  const [shinglesPerBundle, setShinglesPerBundle] = useState(29);
  const [costPerBundle, setCostPerBundle] = useState('');
  const [results, setResults] = useState({});

  const calculateRoofing = () => {
    let roofArea = 0;
    if (inputMethod === 'dimensions') {
      roofArea = roofLength * roofWidth * pitchMultiplier;
    } else {
      roofArea = roofAreaInput * pitchMultiplier;
    }
    const squares = roofArea / 100;

    let bundles = 0;
    let ridgeCapBundles = 0;
    let totalShingles = 0;

    if (shingleWidth && exposure) {
      const coveragePerShingle = (shingleWidth * exposure) / 144;
      const shinglesPerSquare = Math.ceil(100 / coveragePerShingle);
      totalShingles = Math.ceil(shinglesPerSquare * squares);
      bundles = Math.ceil(totalShingles / shinglesPerBundle);
    } else {
      bundles = Math.ceil(squares * bundlesPerSquare);
    }

    if (inputMethod === 'dimensions' && exposure) {
      const ridgeCapShingles = Math.ceil((roofLength * 2 * 12) / exposure);
      ridgeCapBundles = Math.ceil(ridgeCapShingles / shinglesPerBundle);
    }

    let totalCost = 0;
    if (costPerBundle) {
      totalCost = (bundles + ridgeCapBundles) * costPerBundle;
    }

    setResults({
      roofArea: roofArea.toFixed(2),
      squares: squares.toFixed(2),
      bundles,
      ridgeCapBundles,
      totalShingles,
      totalCost: totalCost.toFixed(2),
    });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Roofing Calculator</h2>

      <div className="mb-4">
        <label className="block mb-2">Input Method:</label>
        <label className="mr-4">
          <input
            type="radio"
            value="dimensions"
            checked={inputMethod === 'dimensions'}
            onChange={() => setInputMethod('dimensions')}
          /> Dimensions
        </label>
        <label>
          <input
            type="radio"
            value="area"
            checked={inputMethod === 'area'}
            onChange={() => setInputMethod('area')}
          /> Area
        </label>
      </div>

      {inputMethod === 'dimensions' ? (
        <>
          <div className="mb-4">
            <label>Roof Length (ft):</label>
            <input
              type="number"
              value={roofLength}
              onChange={e => setRoofLength(parseFloat(e.target.value))}
              className="border p-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label>Roof Width (ft):</label>
            <input
              type="number"
              value={roofWidth}
              onChange={e => setRoofWidth(parseFloat(e.target.value))}
              className="border p-1 w-full"
            />
          </div>
        </>
      ) : (
        <div className="mb-4">
          <label>Roof Area (sq ft):</label>
          <input
            type="number"
            value={roofAreaInput}
            onChange={e => setRoofAreaInput(parseFloat(e.target.value))}
            className="border p-1 w-full"
          />
        </div>
      )}

      <div className="mb-4">
        <label>Roof Pitch:</label>
        <select
          value={pitchMultiplier}
          onChange={e => setPitchMultiplier(parseFloat(e.target.value))}
          className="border p-1 w-full"
        >
          {[
            [1.0, '0/12 (Flat)'], [1.013, '2/12'], [1.031, '3/12'],
            [1.054, '4/12'], [1.083, '5/12'], [1.118, '6/12'],
            [1.158, '7/12'], [1.202, '8/12'], [1.25, '9/12'],
            [1.302, '10/12'], [1.356, '11/12'], [1.414, '12/12']
          ].map(([val, label]) => (
            <option key={val} value={val}>{label}</option>
          ))}
        </select>
      </div>

      <h3 className="text-lg font-semibold">Optional Inputs</h3>

      <div className="mb-2">
        <label>Shingle Width (inches):</label>
        <input
          type="number"
          value={shingleWidth}
          onChange={e => setShingleWidth(parseFloat(e.target.value))}
          className="border p-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label>Shingle Exposure (inches):</label>
        <input
          type="number"
          value={exposure}
          onChange={e => setExposure(parseFloat(e.target.value))}
          className="border p-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label>Bundles per Square:</label>
        <input
          type="number"
          value={bundlesPerSquare}
          onChange={e => setBundlesPerSquare(parseFloat(e.target.value))}
          className="border p-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label>Shingles per Bundle:</label>
        <input
          type="number"
          value={shinglesPerBundle}
          onChange={e => setShinglesPerBundle(parseInt(e.target.value))}
          className="border p-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label>Cost per Bundle ($):</label>
        <input
          type="number"
          value={costPerBundle}
          onChange={e => setCostPerBundle(parseFloat(e.target.value))}
          className="border p-1 w-full"
        />
      </div>

      <button onClick={calculateRoofing} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Calculate
      </button>

      {results.roofArea && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold mb-2">Results</h3>
          <p>Roof Area: {results.roofArea} sq ft ({results.squares} squares)</p>
          <p>{shingleWidth && exposure ? `Shingles: ${results.totalShingles} (${results.bundles} bundles)` : `Bundles Needed: ${results.bundles}`}</p>
          <p>{inputMethod === 'dimensions' && exposure ? `Ridge Caps: ${results.ridgeCapBundles} bundles` : 'Ridge Caps: N/A'}</p>
          {costPerBundle && <p>Estimated Cost: ${results.totalCost}</p>}
        </div>
      )}
    </div>
  );
};

export default Roofing;