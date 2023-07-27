// a helper function to return new refrence from an object
export const cloneDeep = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
