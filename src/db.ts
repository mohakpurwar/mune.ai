import localforage from "localforage";

export const budgetsDB = localforage.createInstance({
  name: "mune",
  storeName: "budgets",
});

export const optionsDB = localforage.createInstance({
  name: "mune",
  storeName: "options",
});

export const calcHistDB = localforage.createInstance({
  name: "mune",
  storeName: "calcHistDB",
});
