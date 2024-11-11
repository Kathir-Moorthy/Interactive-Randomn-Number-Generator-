import React, { useState } from "react";
import "./Randomn.css";
import { FaRandom, FaHistory, FaStar, FaToggleOn, FaToggleOff } from "react-icons/fa";

function Randomn() {
    const [count, setCount] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [history, setHistory] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [mode, setMode] = useState("light");
    const [filter, setFilter] = useState("any");
    const [showPopup, setShowPopup] = useState(true);

    function generateRandomNumber() {
        let newCount;
        let attempts = 0;
        const maxAttempts = 100;

        do {
            newCount = Math.floor(Math.random() * (max - min + 1)) + min;
            attempts += 1;

            if (filter === "even" && newCount % 2 !== 0) continue;
            if (filter === "odd" && newCount % 2 === 0) continue;
            if (history.includes(newCount)) continue;

            break; // Exit loop if a valid number is generated

        } while (attempts < maxAttempts);

        // If all possible numbers are in history, reset it
        if (attempts >= maxAttempts) {
            setHistory([]);
        } else {
            setCount(newCount);
            setHistory([newCount, ...history]);
        }
    }

    function toggleMode() {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    }

    function addFavorite() {
        if (!favorites.includes(count)) {
            setFavorites([count, ...favorites]);
        }
    }

    function closePopup() {
        setShowPopup(false);
    }

    function resetSettings() {
        setMin(0);
        setMax(100);
        setFilter("any");
        setHistory([]);
        setFavorites([]);
        setCount(0);
    }

    const isHigh = count >= max * 0.9;
    const isLow = count <= min + (max - min) * 0.1;
    const displayColor = isHigh ? "green" : isLow ? "red" : "black";

    return (
        <div className={`randomn-container ${mode} ${showPopup ? "blur-background" : ""}`}>
            {/* Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Welcome to Kathir's Interactive Random Number Generator</h2>
                        <p>Instructions:</p>
                        <ul>
                            <li>Set the range by entering minimum and maximum values.</li>
                            <li>Click "Generate Random Number" to get a random number within your set range and type.</li>
                            <li>Click "Favorite" to save the current number to your favorites list.</li>
                            <li>Switch between Light and Dark Mode for a customized view.</li>
                        </ul>
                        <button onClick={closePopup} className="close-popup-btn">Got it!</button>
                    </div>
                </div>
            )}

            <h2><FaRandom /> Kathir's Interactive Random Number Generator</h2>
            <h1
                className="Random-Number"
                style={{
                    color: mode === 'dark' ? 'white' : displayColor
                }}
            >
                {count}
            </h1>

            <div className="range-inputs">
                <label htmlFor="min">From:</label>
                <input
                    id="min"
                    type="number"
                    value={min}
                    onChange={(e) => setMin(Number(e.target.value))}
                    placeholder="Min"
                />

                <label htmlFor="max">To:</label>
                <input
                    id="max"
                    type="number"
                    value={max}
                    onChange={(e) => setMax(Number(e.target.value))}
                    placeholder="Max"
                />
            </div>

            {/* Filter Options as Radio Buttons */}
            <div className="filter-options">
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="even"
                        checked={filter === "even"}
                        onChange={() => setFilter("even")}
                    />
                    Even
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="odd"
                        checked={filter === "odd"}
                        onChange={() => setFilter("odd")}
                    />
                    Odd
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="any"
                        checked={filter === "any"}
                        onChange={() => setFilter("any")}
                    />
                    Any
                </label>
            </div>

            <button onClick={generateRandomNumber} className="generate-btn">
                <FaRandom /> Generate Random Number
            </button>

            <button onClick={addFavorite} className="favorite-btn">
                <FaStar /> Favorite
            </button>

            <button onClick={toggleMode} className="theme-toggle">
                {mode === "light" ? <FaToggleOff /> : <FaToggleOn />} {mode === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            <button onClick={resetSettings} className="reset-btn">
                Reset
            </button>

            <div className="history">
                <h3><FaHistory /> History</h3>
                <ul>
                    {history.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
            </div>

            <div className="favorites">
                <h3><FaStar /> Favorites</h3>
                <ul>
                    {favorites.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Randomn;