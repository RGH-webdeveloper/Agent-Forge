import React from "react";
import statsData from "./statsData";
import 'bootstrap/dist/css/bootstrap.min.css';
const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-grid">
        {statsData.map((item, index) => (
          <div key={index} className="stats-item">
            <div>
              <span className="stat-number">{item.number}</span>
            </div>
            <div>
              <span className="stat-label text-secondary">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
