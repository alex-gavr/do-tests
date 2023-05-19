function calculateBounds(
  firstNumber: number,
  secondNumber: number,
  rangePercentage: number,
): [number, number] {
  if (rangePercentage < 0 || rangePercentage > 100) {
    throw new Error('Range percentage must be between 0 and 100.');
  }

  const range = secondNumber - firstNumber;
  const lowerBound = firstNumber + (range * rangePercentage) / 100;
  const upperBound = secondNumber - (range * rangePercentage) / 100;

  return [lowerBound, upperBound];
}

export default calculateBounds;
