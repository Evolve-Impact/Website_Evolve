import React from "react";
import { FaBullseye, FaCogs, FaChartPie, FaProjectDiagram, FaClipboardCheck } from "react-icons/fa";

type Milestone = {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: string; // TailwindCSS classes for positioning
};

const milestones: Milestone[] = [
  {
    title: "Goal",
    description: "Define a 100% achievable, measurable, and relevant business goal.",
    icon: <FaBullseye size={28} />,
    position: "top-10 left-[10%]",
  },
  {
    title: "Strategy",
    description: "Develop a strategy aligned with resources and vision.",
    icon: <FaProjectDiagram size={28} />,
    position: "top-40 left-[35%]",
  },
  {
    title: "Implementation",
    description: "Execute the strategy with focused actions and resources.",
    icon: <FaCogs size={28} />,
    position: "top-72 left-[55%]",
  },
  {
    title: "Analysis",
    description: "Track KPIs, analyze results, and adjust the strategy.",
    icon: <FaChartPie size={28} />,
    position: "top-28 left-[70%]",
  },
  {
    title: "Evaluation",
    description: "Review results, compare with goals, and refine.",
    icon: <FaClipboardCheck size={28} />,
    position: "top-64 left-[85%]",
  },
];

const Roadmap: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] bg-white flex items-center justify-center">
      {/* Road SVG */}
      <svg className="absolute w-full h-full" viewBox="0 0 1200 600" fill="none">
        <path
          d="M 50 550 C 300 400, 500 700, 750 450 S 1150 250, 1150 100"
          stroke="black"
          strokeWidth="60"
          strokeLinecap="round"
        />
        <path
          d="M 50 550 C 300 400, 500 700, 750 450 S 1150 250, 1150 100"
          stroke="white"
          strokeWidth="10"
          strokeDasharray="20 20"
        />
      </svg>

      {/* Milestones */}
      {milestones.map((m, i) => (
        <div
          key={i}
          className={`absolute ${m.position} bg-white shadow-xl rounded-xl p-4 w-56 border border-gray-200`}
        >
          <div className="flex items-center gap-2 text-green-600">
            {m.icon}
            <h3 className="font-bold">{m.title}</h3>
          </div>
          <p className="text-gray-600 text-sm mt-2">{m.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
    