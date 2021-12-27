import React, {useEffect, useState} from 'react';
import {MAX_CELL} from "../constant";
import {getInitialTile} from "../util/tile";
import Tile from "./Tile";
import useMoveTile from "../hook/useMoveTile";

export default function Game() {
    const [tileList, setTileList] = useState([]);
    useMoveTile({tileList, setTileList});

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

            <div className="tile-container">
                { tileList.map(({id, ...props}) =>
                    <Tile key={id} {...props} />
                )}
            </div>
        </div>
    );
}
