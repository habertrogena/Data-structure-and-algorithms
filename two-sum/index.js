//imagine you have a list of numbers and a target number.your job is to find two numbers in that list 
// that add up to the target number
// you also need to tell which position(or indexes) those two numbers are at in the list 

//example if the list is [2,7,11,15] and the target is 9, 
// the the answer would be [0,1] because 2 at index 0 and 7 at ndex 1 equals 9


function twoSum(nums, target) {
  const map = {}; // To store number -> index

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const difference = target - current;

    // Check if the difference is already in the map
    if (map.hasOwnProperty(difference)) {
      return [map[difference], i]; // Found the pair
    }

    // Store the current number with its index
    map[current] = i;
  }

  return null; // No valid pair found
}

console.log(twoSum([2, 5, 11, 7], 9)); // Output: [0, 3]
