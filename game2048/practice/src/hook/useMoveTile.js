import {useEffect} from "react";
import {makeTile, moveTile} from "../util/tile";
import {addKeyObserver, removeKeyObserver} from "../util/keyboard";

export default function useMoveTile({tileList, setTileList}) {
    const moveAndAdd = ({x, y}) => {
        const newTileList = moveTile({tileList, x, y});
        const newTile = makeTile(tileList);
        newTile.isNew = true;
        newTileList.push(newTile);
        setTileList(newTileList);
    }

    const moveUp = () => {
        moveAndAdd({x: 0, y: -1});
    }

    const moveDown = () => {
        moveAndAdd({x: 0, y: 1});
    }

    const moveLeft = () => {
        moveAndAdd({x: -1, y: 0});
    }

    const moveRight = () => {
        moveAndAdd({x: 1, y: 0});
    }

    // 키보드 이벤트
    useEffect(() => {
        addKeyObserver('up', moveUp);
        addKeyObserver('down', moveDown);
        addKeyObserver('left', moveLeft);
        addKeyObserver('right', moveRight);

        return () => {
            removeKeyObserver('up', moveUp);
            removeKeyObserver('down', moveDown);
            removeKeyObserver('left', moveLeft);
            removeKeyObserver('right', moveRight);
        }
    }, [tileList, setTileList]);
}