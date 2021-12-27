import React, {useEffect, useState} from 'react';
import {MAX_CELL} from "../constant";
import {getInitialTile} from "../util/tile";

export default function Game() {
    const [tileList, setTileList] = useState([]);

    const makeCell = (count) => {
        return Array.from({length: count}, (_, i) => i);
    }

    useEffect(() => {
        const newTileList = getInitialTile();
        setTileList(newTileList);
    }, []);

    return (
        <div className="game-container">
            <div className="grid-container">
                {makeCell(MAX_CELL).map(i1 =>
                    <div
                        key={i1}
                        className="grid-row"
                    >
                        { makeCell(MAX_CELL).map(i2 =>
                            <div key={i2} className="grid-cell"></div>
                        )}
                    </div>
                )}
            </div>
            
            {/*TODO: 숫자 */}
            <div className="tile-container">
                { tileList.map(({id, value, x, y}, i) =>
                    <div
                        key={id}
                        className={`tile tile-${value} tile-position-${x}-${y} tile-new`}
                    >
                        <div className="tile-inner">{value}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
