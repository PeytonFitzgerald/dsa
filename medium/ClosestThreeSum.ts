/**
 * 
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
 * 
 * Return the sum of the three integers.
 * 
 * You may assume that each input would have exactly one solution.
 * 
 * 
 * Constraints:
 *      3 <= nums.length <= 500
 *      -1000 <= nums[i] <= 1000
 *      -10^4 <= target <= 10^4
 * 
 * 
 */
function threeSumClosest(nums: number[], target: number): number {

    const sortedNums = nums.sort((a, b) => a - b);
    const numsLength = sortedNums.length;
    let closestSum = numsLength >= 3 ? sortedNums[0] + sortedNums[1] + sortedNums[2] : 0;
    for (let i = 0; i < numsLength; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // Skip duplicate elements

        let start = i + 1;
        let end = numsLength - 1;
        while (start < end) {
            const curSum = sortedNums[i] + sortedNums[start] + sortedNums[end]
            if (closestSum === null) {
                closestSum = curSum
            }
            else if (curSum === target) {
                return curSum
            }
            else if (Math.abs(curSum - target) < Math.abs(closestSum - target)) {
                closestSum = curSum
            }
            if (curSum < target) {
                start++
            }
            if (curSum > target) {
                end--;
            }
        }
    }

    return closestSum;
};