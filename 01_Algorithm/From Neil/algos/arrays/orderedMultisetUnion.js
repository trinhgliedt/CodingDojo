/* 
  Union Sorted Arrays

  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.

  Unions by default will take the set of dupes
  that has the highest occurrences from one array.

  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7, 8, 9];
const expected = [1, 2, 2, 2, 6, 6, 7];
//newArr = [1, 2, 2]
//arr1 idx=2 value = 2
//arr2 idx=2 value = 2
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param  {Array<number>} sortedA
 * @param  {Array<number>} sortedB
 *         @sortedA and @sortedB are both sorted multisets (contain dupes)
 * @return {Array<number>}
 *         An ordered multiset union of @sortedA and @sortedB
 *         The return should include dupes, but the amount of dupes for each int should be based on
 *         the max amount that dupe appears from one set, not the combined amount from both sets.
 * Time:   O(...)
 * Space:  O(...)
 */
function orderedMultisetUnion(sortedA, sortedB) {
  let idxA = 0,
  idxB = 0;

  const union = [];

  while (idxA < sortedA.length || idxB < sortedB.length) {
    let dupCount=0;
    if (sortedA[idxA] == sortedA[idxB]){
      union.push(sortedA[idxB]);
      dupCount ++

    }
    else {
      for (let i=1; i<dupCount+1; i++){
        union.push(sortedA[i-1]);
      }
    }
  if (sortedA[idxA] != sortedB[idxB]) {
    
    if (sortedA[idxA] < sortedA[idxB]){
      dupCount = 0;
      union.push(sortedA[idxA]);
      idxA++;
    }
    if (sortedA[idxA] > sortedA[idxB]){
      dupCount = 0;
      union.push(sortedA[idxB]);
      idxB++;
    }
    union.push(Math.min(sortedA[idxA], sortedA[idxB]);
    idxA++;
    idxB++;
  } else if (sortedA[idxA] < sortedB[idxB]) {
    idxA++;
  } else {
    idxB++;
  }
  }
  return union;

}
module.exports = { orderedMultisetUnion };
