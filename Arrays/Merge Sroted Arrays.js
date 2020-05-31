const mergeSortedArrays = (arr1, arr2) => {
  let newArr = [];
  let arr1Index = 0;
  let arr2Index = 0;
  let newArrayLength = arr1.length + arr2.length;

  for(let i=0; i < newArrayLength; i++) {
    if (arr1[arr1Index] <= arr2[arr2Index] || arr2Index === arr2.length) {
      newArr[i] = arr1[arr1Index++]
    } else {
      newArr[i] = arr2[arr2Index++]
    }
  }
}

mergeSortedArrays([0,3,4,31,32], [3,4,6,30]);