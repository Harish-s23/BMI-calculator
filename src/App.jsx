import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight.");
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBMI =
      weight / (heightInMeters * heightInMeters);

    const roundedBMI = calculatedBMI.toFixed(2);

    setBmi(roundedBMI);

    if (calculatedBMI < 18.5) {
      setCategory("Underweight");
    } else if (calculatedBMI < 25) {
      setCategory("Normal Weight");
    } else if (calculatedBMI < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  const resetCalculator = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className="app">
      <div className="bmi-card">

        <h1>BMI Calculator</h1>
        <p className="subtitle">
          Calculate your Body Mass Index
        </p>

        <div className="input-group">
          <label>Height (cm)</label>
          <input
            type="number"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button onClick={calculateBMI}>
            Calculate BMI
          </button>

          <button
            className="reset-button"
            onClick={resetCalculator}
          >
            Reset
          </button>
        </div>

        {bmi && (
          <div className="result">
            <h2>Your BMI</h2>

            <div className="bmi-value">
              {bmi}
            </div>

            <p className="category">
              {category}
            </p>
          </div>
        )}

        <div className="bmi-table">
          <h3>BMI Categories</h3>

          <div className="row">
            <span>Below 18.5</span>
            <span>Underweight</span>
          </div>

          <div className="row">
            <span>18.5 - 24.9</span>
            <span>Normal</span>
          </div>

          <div className="row">
            <span>25.0 - 29.9</span>
            <span>Overweight</span>
          </div>

          <div className="row">
            <span>30.0+</span>
            <span>Obese</span>
          </div>
        </div>

        <footer>
          <p>
            Developed by <strong>YOUR NAME</strong>
          </p>
          <p>
            Register No: <strong>YOUR REGISTER NUMBER</strong>
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;