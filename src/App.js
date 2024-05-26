import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      classifyBmi(bmiValue);
    }
  };

  const classifyBmi = (bmi) => {
    if (bmi < 18.5) {
      setClassification('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setClassification('Normal weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setClassification('Overweight');
    } else {
      setClassification('Obesity');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">BMI Calculator</h1>
      <form onSubmit={calculateBmi}>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">Height (cm)</label>
          <input
            type="number"
            className="form-control"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">Weight (kg)</label>
          <input
            type="number"
            className="form-control"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Calculate</button>
      </form>
      {bmi && (
        <div className="mt-4">
          <h2>BMI: {bmi}</h2>
          <h3>Classification: {classification}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
