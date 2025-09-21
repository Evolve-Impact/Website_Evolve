// "use client";
// import { useEffect } from "react";
// // import L from "leaflet";
// import L, { LatLngTuple } from "leaflet";
// import "leaflet/dist/leaflet.css";

// const WorldMap = () => {
//   useEffect(() => {
//     const map = L.map("map", {
//       center: [20, 0] as  LatLngTuple, // World center
//       zoom: 2,
//       zoomControl: false,
//     });

//     // Dark theme tiles from Carto
//     L.tileLayer(
//       "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
//       {
//         attribution:
//           '',
//         subdomains: "abcd",
//         maxZoom: 19,
//       }
//     ).addTo(map);

//     // Custom marker style
//     const markerIcon = L.circleMarker([0, 0], {
//       radius: 8,
//       fillColor: "#162556", // your requested color
//       color: "#162556",
//       weight: 1,
//       opacity: 1,
//       fillOpacity: 0.9,
//     });

//        // Data with info
//     const stages = [
//       {
//         name: "Cotton",
//         info: "Cotton originated from Pakistan",
//         coords: [30.3753, 69.3451], // Pakistan
//       },
//       {
//         name: "Yarn",
//         info: "Yarn originated from Indonesia",
//         coords: [-0.7893, 113.9213], // Indonesia
//       },
//       {
//         name: "Fabric",
//         info: "Fabric originated from Malaysia",
//         coords: [4.2105, 101.9758], // Malaysia
//       },
//       {
//         name: "Sewing",
//         info: "Sewing originated from Africa",
//         coords: [1.3733, 32.2903], // Uganda (Africa example)
//       },
//       {
//         name: "Brand",
//         info: "Brand is from US",
//         coords: [37.0902, -95.7129], // USA
//       },
//     ];

//       // Add markers with popups
//     stages.forEach((stage) => {
//       L.circleMarker(stage.coords , {
//         radius: 8,
//         fillColor: "#162556", 
//         color: "#162556",
//         weight: 1,
//         opacity: 1,
//         fillOpacity: 0.9,
//       })
//         .addTo(map)
//         .bindPopup(`<b>${stage.name}</b><br/>${stage.info}`);
//     });

//     return () => {
//       map.remove();
//     };
//   }, []);

//   return (
//     <div
//       id="map"
//       style={{
//         width: "100%",
//         height: "500px",
//         borderRadius: "16px",
//         overflow: "hidden",
//         borderStyle : "solid",
//         borderColor : "gray",
//         zIndex : '1'
//       }}
//     />
//   );
// };

// export default WorldMap;
"use client";
import { useEffect } from "react";
import L from "leaflet";
import type { LatLngTuple } from "leaflet"
import "leaflet/dist/leaflet.css";

const WorldMap = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [20, 0] as LatLngTuple, // ✅ force tuple type
      zoom: 2,
      zoomControl: false,
    });

    // Dark theme tiles
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "",
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    // Data with info
    const stages: { name: string; info: string; coords: LatLngTuple }[] = [
      {
        name: "Cotton",
        info: "Cotton originated from Pakistan",
        coords: [30.3753, 69.3451],
      },
      {
        name: "Yarn",
        info: "Yarn originated from China",
        coords: [35.8617, 104.1954],
      },
      {
        name: "Fabric",
        info: "Fabric originated from Malaysia",
        coords: [4.2105, 101.9758],
      },
      {
        name: "Sewing",
        info: "Sewing originated from Africa",
        coords: [1.3733, 32.2903], // Uganda as Africa example
      },
      {
        name: "Brand",
        info: "Brand is from US",
        coords: [37.0902, -95.7129],
      },
    ];

   
    // Add markers with always-visible labels
    stages.forEach((stage) => {
      const marker = L.circleMarker(stage.coords, {
        radius: 8,
        fillColor: "#22AED7",
        color: "#22AED7",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.9,
      }).addTo(map);

      marker.bindTooltip(
        `<b>${stage.name}</b>`,
        { permanent: true, direction: "top", className: "map-label" }
      );
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "500px",
        borderRadius: "16px",
        overflow: "hidden",
        borderStyle: "solid",
        borderColor: "black",
        zIndex: "1",
      }}
    />
  );
};

export default WorldMap;
