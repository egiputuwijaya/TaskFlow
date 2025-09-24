"use client";
import { PieChart, Pie, Cell } from "recharts";

export default function TaskProfileChart({ value, color }) {
  const data = [
    { name: "Progress", value: value },
    { name: "Remaining", value: 100 - value },
  ];

  return (
    <PieChart width={180} height={180}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        startAngle={90}
        endAngle={-270}
        paddingAngle={2}
        dataKey="value"
        isAnimationActive={true}
        animationDuration={1200}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={index === 0 ? color : "#e5e7eb"} // abu-abu untuk sisa
          />
        ))}
      </Pie>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-blue-500 font-bold text-lg"
      >
        {value}%
      </text>
    </PieChart>
  );
}
