//Time Complexity: O(n) because the function iterates from 1 to n, performing a constant-time operation at each step.
//Space Complexity: 𝑂(1) because it uses a fixed amount of space regardless of the input size.
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
//Time Complexity: 𝑂(𝑛) because the function makes n recursive calls.
//Space Complexity: O(n) due to the recursion stack, which can grow linearly with n.
function sum_to_n_b(n: number): number {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n_b(n - 1);
}
//Time Complexity: 𝑂(1) because the calculation uses a constant number of operations.
//Space Complexity: O(1) because it uses a fixed amount of space
function sum_to_n_c(n: number): number {
    return (n * (n + 1)) / 2;
}