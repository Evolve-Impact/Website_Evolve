import React from "react";

const CubeGrid: React.FC = () => {
  const cubes = [
    { text: "Traceability", color: "bg-blue-400", x: 0, y: 1, z: 1 },
    { text: "Quality", color: "bg-green-400", x: 1, y: 1, z: 1 },
    { text: "Battery-pass", color: "bg-red-400", x: 2, y: 1, z: 1 },
    { text: "Digital on/off Boarding", color: "bg-gray-400", x: 0, y: 0, z: 0 },
    { text: "Working Model", color: "bg-gray-500", x: 1, y: 0, z: 0 },
    { text: "Data & Contract Mgt.", color: "bg-gray-500", x: 0, y: 0, z: 1 },
    { text: "Partner Comms/ Mgt.", color: "bg-gray-500", x: 1, y: 0, z: 1 },
    { text: "Verification", color: "bg-gray-500", x: 2, y: 0, z: 1 },
    { text: "Business process", color: "bg-gray-500", x: 2, y: 0, z: 0 },
    { text: "Use Case KITs and frameworks", color: "bg-yellow-500", x: 0, y: -1, z: 0 },
    { text: "Dataspace infrastructure e.g. EDC", color: "bg-yellow-500", x: 1, y: -1, z: 0 },
    { text: "Governance Framework", color: "bg-orange-400", x: 0, y: -1, z: 1 },
    { text: "Certification processes", color: "bg-orange-400", x: 1, y: -1, z: 1 },
    { text: "Industry standards", color: "bg-orange-400", x: 2, y: -1, z: 0 },
    { text: "Standardisation processes", color: "bg-orange-400", x: 2, y: -1, z: 1 },
    { text: "Identity access mgt.", color: "bg-orange-600", x: 2, y: -1, z: 2 },
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center perspective-[1200px]">
      <div className="relative transform rotate-x-45 rotate-y-45">
        {cubes.map((cube, idx) => (
          <div
            key={idx}
            className={`absolute w-28 h-28 flex items-center justify-center text-center text-xs font-semibold text-white shadow-xl rounded-md ${cube.color}`}
            style={{
              transform: `translate3d(${cube.x * 7.5}rem, ${-cube.y * 7.5}rem, ${cube.z * 7.5}rem)`,
            }}
          >
            {cube.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CubeGrid;