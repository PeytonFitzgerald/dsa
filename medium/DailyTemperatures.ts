function dailyTemperatures(temperatures: number[]): number[] {
    let stack: number[] = []; // Initialize an empty stack to hold indices of temperatures
    let answer: number[] = new Array(temperatures.length).fill(0); // Create an array of the same length as temperatures filled with 0s

    // Iterate through each temperature
    for (let i = 0; i < temperatures.length; i++) {
        // Check if the current temperature is higher than the temperature at the index on the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx = stack.pop()!; // Pop the top index from the stack
            let diff = i - idx; // Calculate the difference in days
            answer[idx] = diff; // Update the answer array at the popped index with the number of days waited
        }
        stack.push(i); // Push the current index onto the stack
    }
    return answer; // Return the answer array with days waited for a warmer temperature
};