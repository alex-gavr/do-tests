const getQuestionMarks = (population: number): string[] => {
  const questionMarks = Array.from({ length: String(population).length }, () => '?');
  return questionMarks;
};
export default getQuestionMarks;
