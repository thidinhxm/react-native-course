export function generateRandomBetween(min: number, max: number, exclude?: number): number {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (exclude !== undefined && randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}