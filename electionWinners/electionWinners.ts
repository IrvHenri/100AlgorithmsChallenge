export function electionsWinners(votes: number[], k: number): number {
  let count = 0;
  const mostVotes = Math.max(...votes);

  const filteredHighestVoteCount = votes.filter(
    (voteCount) => voteCount === mostVotes
  ).length;

  if (filteredHighestVoteCount < 2 && k === 0) {
    return 1;
  }

  for (let voteCount of votes) {
    if (mostVotes - voteCount < k) {
      count += 1;
    }
  }
  console.log(count);

  return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
