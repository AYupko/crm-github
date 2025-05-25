export const formatUnix = (input: string | number | Date): number => {
  const date = new Date(input);
  return Math.floor(date.getTime() / 1000);
};
