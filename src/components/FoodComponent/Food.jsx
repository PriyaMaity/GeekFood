import React, { useEffect, useState } from "react";
import Navbar from "../NavbarComponent/Navbar";
import "./Food.css";

function Food() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);
  const INCREMENT = 8;

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
        console.log(data.meals);
      })
      .catch((err) => {
        console.error("Failed to fetch meals:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + INCREMENT);
  };

  const visibleMeals = meals.slice(0, visibleCount);

  return (
    <div className="food-page">
      <Navbar />

      <h2 className="food-heading">Delicious Meals</h2>

      {loading ? (
        <p className="loading">Loading…</p>
      ) : (
        <>
          <div className="meal-grid">
            {visibleMeals.map((meal) => (
              <div className="meal-card" key={meal.idMeal}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="meal-names">
                  <h3>{meal.strMeal}</h3>
                  <p>
                    {meal.strArea} • {meal.strCategory}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < meals.length ? (
            <div className="load-more-container">
              <button onClick={loadMore} className="load-more-btn">
                Load More
              </button>
            </div>
          ) : (
            <p className="end-of-list">You’ve reached the end!</p>
          )}
        </>
      )}
    </div>
  );
}

export default Food;
