const getPropType = (item, labels) => {
  if (typeof item !== "string") return null;

  const label = labels[item.split("::")[0]];

  return typeof item === "string" && item.startsWith(`${labels[label]}::`)
    ? labels[label]
    : null;
};

export const getProps = (items, labels) =>
  items.reduce((current, item) => {
    const type = getPropType(item, labels);
    return type ? { ...current, [type]: item.split("::")[1].trim() } : current;
  }, {});
