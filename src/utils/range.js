function createRange(start, end) {
  let range = [];
  for (let counter = start; counter <= end; counter++) {
    range.push(counter);
  }
  return range;
}
export { createRange };
