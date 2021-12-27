import {getRandomInteger} from "./number";
import {MAX_CELL} from "../constant";
import {error} from "./error";

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

    while (
        !tile ||
        (tileList && checkCollision(tileList, tile))
        ) {
        tile = {
            id: currentTileId++,
            x: getRandomInteger(1, MAX_CELL),
            y: getRandomInteger(1, MAX_CELL),
            value: 2,
            isNew: undefined,
            isMerged: undefined
        };
    }

    return tile;
}

export function moveTile({tileList, x, y}) {
    error(x !== 0 && y !== 0, '');
    const isMoveY = y !== 0;
    const isMinus = x + y < 0;
    const sorted = tileList
        .map(item => ({...item, isMerged: false, isNew: false}))
        .filter(item => !item.isDisabled)
        .sort((a, b) => {
            const res = isMoveY ? a.x - b.x : a.y - b.y;
            if (res) {
                return res;
            } else {
                if (isMoveY) {
                    return isMinus ? a.y - b.y : b.y - a.y;
                } else {
                    return isMinus ? a.x - b.x : b.x - a.x;
                }
            }
        });
    const initialPos = isMinus ? 1 : MAX_CELL;
    let pos = initialPos;
    for (let i = 0; i < sorted.length; i++) {
        if (isMoveY) {
            sorted[i].y = pos;
            pos = isMinus ? pos + 1 : pos - 1;
            if (sorted[i].x !== sorted[i + 1]?.x) {
                pos = initialPos;
            }
        } else {
            sorted[i].x = pos;
            pos = isMinus ? pos + 1 : pos - 1;
            if (sorted[i].y !== sorted[i + 1]?.y) {
                pos = initialPos;
            }
        }
    }

    let nextPos = 0;
    const newTileList = [...sorted];

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i].isDisabled) {
            continue;
        }

        if (
            nextPos &&
            (isMoveY
                ? sorted[i].x === sorted[i - 1]?.x
                : sorted[i].y === sorted[i - 1]?.y)
        ) {
            if (isMoveY) {
                sorted[i].y = nextPos;
            } else {
                sorted[i].x = nextPos;
            }
            nextPos += isMinus ? 1 : -1;
        } else {
            nextPos = 0;
        }

        if (
            (isMoveY
                ? sorted[i].x === sorted[i + 1]?.x
                : sorted[i].y === sorted[i + 1]?.y) &&
            sorted[i].value === sorted[i + 1]?.value
        ) {
            const newTile = makeTile();
            newTile.isMerged = true;
            newTile.x = sorted[i].x;
            newTile.y = sorted[i].y;
            newTile.value = sorted[i].value * 2;
            newTileList.push(newTile);
            sorted[i].isDisabled = true;
            sorted[i + 1].isDisabled = true;

            if (isMoveY) {
                nextPos = sorted[i + 1].y;
                sorted[i + 1].y = sorted[i].y;
            } else {
                nextPos = sorted[i + 1].x;
                sorted[i + 1].x = sorted[i].x;
            }
        }
    }

    return newTileList;
}