export default function parseValues(values, variables) {
  return Object.entries(values).reduce((acc, [key, value]) => {
    const type = variables.find((v) => v.name === key)?.type;

    switch (type) {
      case "date":
        acc[key] = new Date(value);
        break;
      default:
        acc[key] = value;
        break;
    }

    return acc;
  }, {});
}
