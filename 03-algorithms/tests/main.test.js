import { expect, test } from "vitest";

import { cumSum, cumSum2, cumSum3 } from "../cumSum";
test("cumulative sum of array", () => {
  expect(cumSum([1, 3, 5, 7])).toBe(16);
  expect(cumSum2([1, 3, 5, 7])).toBe(16);
  expect(cumSum3([1, 3, 5, 7])).toBe(16);
});

import { binSearch } from "../binSearch";
test("binary search of array", () => {
  expect(binSearch([], 1)).toBe(-1);
  expect(binSearch(null, 1)).toBe(-1);
  expect(binSearch(undefined, 1)).toBe(-1);
  expect(binSearch([1, 2, 3], 4)).toBe(-1);
  expect(binSearch([2, 4, 6, 8], 6)).toBe(2);
  expect(binSearch([1, 3, 5, 7], 1)).toBe(0);
});

const ITEMS_TO_CACHE = {
  David: 34,
  Sophie: 25,
  Miso: 1,
  Kiera: 18,
  Blaine: 21,
  Dominic: 20,
};

import { LRU } from "../lru-cache";
test("LRU: evicts least-recent and refreshes on get", () => {
  const lru = new LRU(5);

  for (const [k, v] of Object.entries(ITEMS_TO_CACHE)) {
    lru.putItem(k, v);
  }

  // eviction happened
  expect(lru.cache.size).toBe(5);
  expect(lru.getItem("David")).toBeNull();

  // LRU is Sophie (because David was evicted)
  expect([...lru.cache.entries()][0]).toStrictEqual(["Sophie", 25]);

  // access Sophie => becomes MRU
  expect(lru.getItem("Sophie")).toBe(25);

  const entries = [...lru.cache.entries()];
  expect(entries[0]).toStrictEqual(["Miso", 1]); // new LRU
  expect(entries.at(-1)).toStrictEqual(["Sophie", 25]); // MRU
});
