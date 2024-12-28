export function isAdjacent(r1, c1, r2, c2) {
    return (
      (Math.abs(r1 - r2) === 1 && c1 === c2) ||
      (Math.abs(c1 - c2) === 1 && r1 === r2)
    );
  }