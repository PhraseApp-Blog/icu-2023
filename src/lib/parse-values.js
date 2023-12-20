export default function parseValues(values, variables) {
  return Object.entries(values).reduce((acc, [key, value]) => {
    const type = variables.find((v) => v.name === key)?.type;
    if (!type) {
      return acc;
    }
    if (type === "date") {
      const date = new Date(value);
      if (date.toString() === "Invalid Date") {
        return acc;
      }
      acc[key] = date;
    }
    return acc;
  });
}
