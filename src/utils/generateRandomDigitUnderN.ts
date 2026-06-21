export function generateRandomDigitUnderN(n: number): number {
  if (typeof n !== "number") {
    throw new Error("Only number required!");
  }

  return Math.ceil(Math.random() * n) % n;
}
