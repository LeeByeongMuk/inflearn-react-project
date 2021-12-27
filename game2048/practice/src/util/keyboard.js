import hotkeys from "hotkeys-js";

let observerMap = {};
export function addKeyObserver(key, callback) {
    if (!observerMap[key]) {
        observerMap[key] = [];
        hotkeys(key, () => executeCallbacks(key));
    }

    observerMap[key].push(callback);
}

export function removeKeyObserver(key, callback) {
    observerMap[key] = observerMap[key].filter(item => item !== callback);
}

export function executeCallbacks(key) {
    for (const cb of observerMap[key]) {
        cb();
    }
}

