function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    let first = cost[0];
    let second = cost[1];

    for (let i = 2; i < n; i++) {
        const current = cost[i] + Math.min(first, second);
        first = second;
        second = current;
    }

    return Math.min(first, second);
}
