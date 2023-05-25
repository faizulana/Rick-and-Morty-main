import React from "react";

export const LocationCard = ({ name, type, dimension }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        border: '1px solid gray',
        width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <span>{name}</span>
      <span>{type}</span>
      <span>{dimension}</span>
    </div>
  );
};
