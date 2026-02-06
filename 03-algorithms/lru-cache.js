/*
LRU Interview Question
Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.

Initialize an object with a maxium capacity of elements.
getItem Return the value of the key. Update cache with the most recently used key.
putItem Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity.
*/

export function LRU(cap) {
  this.capacity = cap;
  this.cache = new Map(); // key -> value, insertion order = recency
}

LRU.prototype.getItem = function (key) {
  if (!this.cache.has(key)) return null;

  const val = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, val);
  return val;
};

LRU.prototype.putItem = function (key, val) {
  if (this.capacity <= 0) return;

  if (this.cache.has(key)) this.cache.delete(key);

  this.cache.set(key, val);

  if (this.cache.size > this.capacity) {
    const lruKey = this.cache.keys().next().value;
    this.cache.delete(lruKey);
  }
};

function main() {
  const cache = new LRU(5);
  cache.putItem("a", 1);
  console.log(cache.cache);
  cache.putItem("a", 2);
  console.log(cache.cache);
  cache.putItem("b", 3);
  cache.putItem("c", 4);
  cache.putItem("d", 5);
  cache.putItem("e", 6);
  console.log(cache.cache);
  cache.putItem("f", 7);
  console.log(cache.cache);
}

//main();
