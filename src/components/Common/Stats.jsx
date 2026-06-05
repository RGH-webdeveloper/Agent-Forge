import React from "react";
import statsData from "./statsData";
import useCountUp from "../HomePage/useCountUp";
import "bootstrap/dist/css/bootstrap.min.css";

const StatItem = ({ item, labelTextColor, textColor, textFontSize, textFontWeight, animate }) => {
  const { count, ref } = useCountUp(animate ? item.number : 0, 2000);
  const displayValue = animate ? `${count}${item.suffix}` : `${item.number}${item.suffix}`;

  return (
    <div ref={ref} className="stats-item row">
      <span className="stat-number" style={{ color: textColor, fontSize: textFontSize }}>
        {displayValue}
      </span>
      <span className="stat-label" style={{ color: labelTextColor, fontWeight: textFontWeight }}>
        {item.label}
      </span>
    </div>
  );
};

const Stats = ({ labelTextColor, textColor, textFontSize, textFontWeight, animate = false }) => {
  return (
    <>
      {statsData.map((item, index) => (
        <StatItem
          key={index}
          item={item}
          animate={animate}
          labelTextColor={labelTextColor}
          textColor={textColor}
          textFontSize={textFontSize}
          textFontWeight={textFontWeight}
        />
      ))}
    </>
  );
};

export default Stats;