"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_localstorage_1 = require("node-localstorage");
(async () => {
    const storage = new node_localstorage_1.LocalStorage('./bottles');
    const time = new Date().toLocaleDateString().replaceAll('/', '_');
    const value = storage.getItem(time);
    if (value) {
        const v = Number(value);
        storage.setItem(time, String(v + 1));
    }
    else {
        storage.setItem(time, String(1));
    }
    console.log('Done!');
    process.exit(0);
})();
