export const getFilterItems = <
  O extends { [key in string]: any },
  T extends keyof O,
>(
  items: O[],
  key: T,
) =>
  Object.entries(
    items
      .flatMap((item) => item[key])
      .reduce(
        (acc, label) => (acc[label] ? ++acc[label] : (acc[label] = 1), acc),
        {} as { [key in string]: number },
      ),
  )
    .sort(([, a], [, b]) => b - a)
    .map(([label]) => label);
