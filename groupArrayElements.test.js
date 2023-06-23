const myFunctions = require('./groupArrayElements');
const groupArrayElements = myFunctions.groupArrayElements


  test('it should divide the array into N equally sized subarrays', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // Test case with N = 3
    const result1 = groupArrayElements(inputArray, 3);
    expect(result1).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);

    // Test case with N = 2
    const result2 = groupArrayElements(inputArray, 2);
    expect(result2).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);

    // Test case with N = 4
    const result3 = groupArrayElements(inputArray, 6);
    expect(result3).toEqual([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10]]);
  });

  test('it should handle an empty array', () => {
    const inputArray = [];
    
    const result = groupArrayElements(inputArray, 3);
    expect(result).toEqual([]);
  });

  test('it should handle N greater than the length of the array', () => {
    const inputArray = [1, 2, 3];
    
    const result = groupArrayElements(inputArray, 5);
    expect(result).toEqual([[1, 2, 3]]);
  });

  test('it should handle N equal to 1', () => {
    const inputArray = [1, 2, 3];
    
    const result = groupArrayElements(inputArray, 1);
    expect(result).toEqual([[1], [2], [3]]);
  });
  
  test('it should handle N equal to 0', () => {
    const inputArray = [1, 2, 3];
    
    const result = groupArrayElements(inputArray, 0);
    expect(result).toEqual('N should be a positive integer');
  });

  test('it should handle non-integer N values', () => {
    const inputArray = [1, 2, 3];
    
    const result = groupArrayElements(inputArray, 2.5);
    expect(result).toEqual('N should be a positive integer');
  });
;
