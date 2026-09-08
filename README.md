# Ex06 BMI Calculator
### Date:05-03-2026
### NAME: HARESH R
### REG NO: 212224040097

# AIM
To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

# DESIGN STEPS

STEP 1: Initialize React Project
Create a new React app using create-react-app.
Install React Router using:
npm install react-router-dom


STEP 2: Set Up Routing
Create routing structure with react-router-dom:

Home route (/) – Intro or Navigation
BMI Calculator route (/bmi)
Result route (/result)


STEP 3: Design the BMI Form Page
Create a form to accept Height (in cm or m) and Weight (in kg).
On form submit, navigate to the result page with entered values via URL query params or context/state.


STEP 4: Handle Input Validation
Check if height and weight are valid numbers.
Optionally, show error messages for invalid inputs.


STEP 5: Perform BMI Calculation
In the result component:
Extract height and weight from the route (URL or passed state).
Apply the BMI formula:
BMI = Weight(kg) / Height(m)2
Convert height from cm to m if needed.


STEP 6: Display Result
Show calculated BMI.
Show category based on BMI range:
Underweight, Normal, Overweight, Obese, etc.


STEP 7: Navigation Options
Provide a button to go back to the BMI form to calculate again.


STEP 8: Enhancements
Add styling using CSS or Tailwind.

# PROGRAM

App.jsx
```
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
```

App.css
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.bmi-card {
  width: 100%;
  max-width: 450px;
  background: white;
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 8px;
}

.subtitle {
  text-align: center;
  color: #777;
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #444;
}

.input-group input {
  width: 100%;
  padding: 13px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

.input-group input:focus {
  border-color: #667eea;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 25px;
}

button {
  flex: 1;
  padding: 13px;
  border: none;
  border-radius: 8px;
  background: #667eea;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #5568d8;
}

.reset-button {
  background: #555;
}

.reset-button:hover {
  background: #333;
}

.result {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  border-radius: 12px;
  background: #f5f6ff;
}

.result h2 {
  color: #444;
  margin-bottom: 10px;
}

.bmi-value {
  font-size: 42px;
  font-weight: bold;
  color: #667eea;
}

.category {
  margin-top: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #555;
}

.bmi-table {
  margin-top: 30px;
}

.bmi-table h3 {
  text-align: center;
  margin-bottom: 15px;
  color: #444;
}

.row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
  color: #555;
}

footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  text-align: center;
  color: #777;
  font-size: 14px;
}

footer p {
  margin: 5px 0;
}

@media (max-width: 500px) {
  .bmi-card {
    padding: 25px;
  }

  .button-group {
    flex-direction: column;
  }

  h1 {
    font-size: 28px;
  }
}
```

Main.jsx
```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
index.css
```
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

body {
  margin: 0;
}

#root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}

```
# OUTPUT

<img width="1156" height="992" alt="image" src="https://github.com/user-attachments/assets/c92de16d-2476-46df-af5b-2d80f526b165" />


# RESULT
The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.
