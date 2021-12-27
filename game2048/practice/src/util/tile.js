import {getRandomInteger} from "./number";
import {MAX_CELL} from "../constant";

export function getInitialTile() {
    const tileList = [];
    const tile1 = makeTile(tileList);
    tileList.push(tile1);
    const tile2 = makeTile(tileList);
    tileList.push(tile2);
    return tileList;
}

export function checkCollision(tileList, {x, y}) {
    return tileList.some(item => item.x === x && item.y === y);
}

let currentTileId = 1;
export function makeTile(tileList) {
    let tile;

    while (!tile || checkCollision(tileList, tile)) {
        tile = {
            id: currentTileId++,
            x: getRandomInteger(1, MAX_CELL),
            y: getRandomInteger(1, MAX_CELL),
            value: 2
        };
    }

    return tile;
}