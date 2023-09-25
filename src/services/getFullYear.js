export const getYear = str => {
  return str ? new Date(str).getFullYear() : 'no date';
};
