
import React, { useState, useEffect, useRef } from "react";

const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#FF9F40", "#4BC0C0", "#9966FF"];

const HomeCost = () => {
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [costPerSqft, setCostPerSqft] = useState('');
  const [costs, setCosts] = useState({
    total: 0,
    cement: 0,
    sand: 0,
    aggregate: 0,
    steel: 0,
    finishers: 0,
    fittings: 0,
  });
  const [quantities, setQuantities] = useState({
    cement: 0,
    sand: 0,
    aggregate: 0,
    steel: 0,
    paint: 0,
    bricks: 0,
    flooring: 0,
  });

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const resetForm = () => {
    setBuiltUpArea('');
    setCostPerSqft('');
    setCosts({
      total: 0,
      cement: 0,
      sand: 0,
      aggregate: 0,
      steel: 0,
      finishers: 0,
      fittings: 0,
    });
    setQuantities({
      cement: 0,
      sand: 0,
      aggregate: 0,
      steel: 0,
      paint: 0,
      bricks: 0,
      flooring: 0,
    });

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
  };

  const calculateCosts = () => {
    if (builtUpArea <= 0 || costPerSqft <= 0) {
      alert("Please enter valid positive numbers.");
      return;
    }

    const totalCost = builtUpArea * costPerSqft;

    const cement = totalCost * 0.164;
    const sand = totalCost * 0.123;
    const aggregate = totalCost * 0.074;
    const steel = totalCost * 0.246;
    const finishers = totalCost * 0.165;
    const fittings = totalCost * 0.228;

    const cementQty = builtUpArea * 0.4;
    const sandQty = builtUpArea * 0.816;
    const aggregateQty = builtUpArea * 0.608;
    const steelQty = builtUpArea * 4;
    const paintQty = builtUpArea * 0.18;
    const bricksQty = builtUpArea * 8;
    const flooringQty = builtUpArea * 1.3;

    setCosts({ total: totalCost, cement, sand, aggregate, steel, finishers, fittings });
    setQuantities({ cement: cementQty, sand: sandQty, aggregate: aggregateQty, steel: steelQty, paint: paintQty, bricks: bricksQty, flooring: flooringQty });
  };

  useEffect(() => {
    if (chartRef.current && costs.total > 0) {
      (async () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const { Chart, registerables } = await import("chart.js");
        Chart.register(...registerables);

        chartInstanceRef.current = new Chart(chartRef.current, {
          type: "pie",
          data: {
            labels: ["Cement", "Sand", "Aggregate", "Steel", "Finishers", "Fittings"],
            datasets: [{
              label: "Cost Distribution",
              data: [costs.cement, costs.sand, costs.aggregate, costs.steel, costs.finishers, costs.fittings],
              backgroundColor: colors,
            }],
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => {
                    const value = tooltipItem.raw || 0;
                    const total = tooltipItem.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    const percentage = (value / total) * 100;
                    return `${tooltipItem.label}: ₹${value.toFixed(2)} (${percentage.toFixed(2)}%)`;
                  }
                }
              }
            }
          },
        });
      })();
    }
  }, [costs]);

  return (
    <div id="construction-calculator" className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Construction Cost Calculator</h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <input 
            type="number" 
            placeholder="Built-up Area (sq ft)" 
            value={builtUpArea} 
            onChange={(e) => setBuiltUpArea(Number(e.target.value))} 
            required 
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input 
            type="number" 
            placeholder="Cost per Sq ft (INR)" 
            value={costPerSqft} 
            onChange={(e) => setCostPerSqft(Number(e.target.value))} 
            required 
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex space-x-4">
          <button 
            type="button" 
            onClick={calculateCosts} 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Calculate
          </button>
          <button 
            type="button" 
            onClick={resetForm} 
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Reset
          </button>
        </div>
      </form>

      <h3 className="text-xl font-semibold mt-6 text-gray-700">Total Cost: ₹{costs.total.toFixed(2)}</h3>

      <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-600">Cost Breakdown Table</h4>
      <table className="w-full table-auto border-collapse border border-gray-300 shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left text-gray-700">Material</th>
            <th className="py-2 px-4 text-left text-gray-700">Cost (INR)</th>
            <th className="py-2 px-4 text-left text-gray-700">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Cement</td>
            <td className="py-2 px-4">₹{costs.cement.toFixed(2)}</td>
            <td className="py-2 px-4">{quantities.cement.toFixed(2)} bags</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Sand</td>
            <td className="py-2 px-4">₹{costs.sand.toFixed(2)}</td>
            <td className="py-2 px-4">{quantities.sand.toFixed(2)} tons</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Aggregate</td>
            <td className="py-2 px-4">₹{costs.aggregate.toFixed(2)}</td>
            <td className="py-2 px-4">{quantities.aggregate.toFixed(2)} tons</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Steel</td>
            <td className="py-2 px-4">₹{costs.steel.toFixed(2)}</td>
            <td className="py-2 px-4">{quantities.steel.toFixed(2)} kg</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Finishers</td>
            <td className="py-2 px-4">₹{costs.finishers.toFixed(2)}</td>
            <td className="py-2 px-4">{quantities.paint.toFixed(2)} liters</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Fittings</td>
            <td className="py-2 px-4">₹{costs.fittings.toFixed(2)}</td>
            <td className="py-2 px-4">{quantities.bricks.toFixed(0)} nos</td>
          </tr>
        </tbody>
      </table>

      <canvas ref={chartRef} className="mt-6"></canvas>
    </div>
  );
};

export default HomeCost;
