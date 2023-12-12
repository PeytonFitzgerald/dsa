/**
 * 188. Rotate Array
 * 
 * Given an integer array nums, rotate the array to 
 * the right by k steps, where k is non-negative.
 * 
*/

// Initial Inefficient Solution
// Problems: O(n*k), as outer loop runs k times,
// and inner loop runs n-2 tiimes, where n is the length of the array
function inefficientRotate(nums: number[], k: number): void {
    k = k % nums.length;
    while (k > 0) {
        const tmp = nums[nums.length - 1];
        for (let i = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = tmp;
        k--;
    }
};

// More EFficient Solution
function rotate(nums: number[], k: number): void {
    const reverse = (nums: number[], start: number, end: number) => {
        while (start < end) {
            const tmp = nums[start]
            nums[start] = nums[end]
            nums[end] = tmp
            start++;
            end--;
        }
    }
    // need to correct for an edge case here
    // as k can be > nums.length, apparently
    k = k % nums.length;
    // First we reverse the entire array
    // this moves the tricky elements at the end of the array 
    // closer to the position they need to end up in 
    // the front of the array, but in reverse order
    reverse(nums, 0, nums.length - 1)
    // next we reverse the first k elements of the array 
    // in order to correct their order
    reverse(nums, 0, k - 1)
    // finally we reverse the last k elements of the array
    // in order to correct their order
    reverse(nums, k, nums.length - 1)
};