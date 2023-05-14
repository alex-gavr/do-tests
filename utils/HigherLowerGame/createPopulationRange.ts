const createPopulationRange = (population: number, rangePercentage: number): [number, number] => {
  const halfRange = Math.floor(((rangePercentage / 2) * population) / 100);
  const lowerBound = Math.max(0, population - halfRange);
  const upperBound = population + halfRange;
  return [lowerBound, upperBound];
};

export default createPopulationRange;