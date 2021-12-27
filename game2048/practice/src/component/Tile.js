import React from "react";

export default function Tile({value, x, y}) {
    return (
        <div
            className={`tile tile-${value} tile-position-${x}-${y} tile-new`}
        >
            <div className="tile-inner">{value}</div>
        </div>
    );
}