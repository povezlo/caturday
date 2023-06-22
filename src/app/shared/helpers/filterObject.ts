type MyObject = Record<string, any>;

export function filterObject(object: MyObject) {
  const filteredObject: MyObject = {};

  for (const key in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(key) && object[key] !== undefined  && object[key] !== null) {
      filteredObject[key] = object[key];
    }
  }

  return filteredObject;
}
