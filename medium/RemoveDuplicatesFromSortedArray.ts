function efficientSolution(nums: number[]): number {
    if (nums.length <= 2) {
        return nums.length;
    }
    // first two indices can stay no matter what
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        // compare current index i with the element two places before it (k-2)
        if (nums[i] !== nums[k - 2]) {
            // if different, its valid to keep it. 
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}


function initialSolution(nums: number[]): number {
    /* Initial Solution, not thinking of efficiency, 
    just waht first popped into my mind*/
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        // index of next item;
        let numFound = 1;
        let numToRemove = 0;
        let rightMostRemove = 0;
        let j = i + 1;
        let nextDigit = false;
        while (j < nums.length && !nextDigit) {
            if (nums[j] !== nums[i]) {
                if (rightMostRemove > 0) {
                    console.log(`Removing from ${rightMostRemove}, ${numToRemove}`)
                    // splice is inefficient removal technique
                    nums.splice(rightMostRemove, numToRemove)
                }
                nextDigit = true;
            } else if (numFound < 2) {
                numFound++
            } else {
                numToRemove++;
                rightMostRemove = j - 1;
            }
            j++;
        }
        k += numFound;
    }
    return k;
}