import Comparator from '../../../utils/comparator/Comparator';
/**
 * Binary search implementation.
 *
 * @param {*[]} sortedArray - The sorted array to search in.
 * @param {*} seekElement - The element to search for.
 * @param {function(a, b): number} [comparatorCallback] - A callback function to compare elements.
 * @return {number} - The index of the seekElement in the sortedArray, or -1 if not found.
 */
export default function binarySearch(sortedArray, seekElement, comparatorCallback) {
  // Create a comparator function from the comparatorCallback.
  // The Comparator object provides comparison methods like equal() and lessThan().
  const comparator = new Comparator(comparatorCallback);

  // Initialize the indices for the current array boundaries.
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  // Continue splitting the array until boundaries collapse and nothing is left to split.
  while (startIndex <= endIndex) {
    // Calculate the index of the middle element.
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    // If we've found the element, return its position.
    if (comparator.equal(sortedArray[middleIndex], seekElement)) {
      return middleIndex;
    }

    // Decide which half to choose for the next search: left or right.
    if (comparator.lessThan(sortedArray[middleIndex], seekElement)) {
      // Go to the right half of the array.
      startIndex = middleIndex + 1;
    } else {
      // Go to the left half of the array.
      endIndex = middleIndex - 1;
    }
  }

  // Return -1 if the element was not found.
  return -1;
}
