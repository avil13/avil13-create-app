export const toKebabCase = (str: string): string => {
  const strList = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  if (!strList) {
    return '';
  }
  return strList.map((x) => x.toLowerCase())
    .join('-');
};
