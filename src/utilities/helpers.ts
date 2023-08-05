/**
 * a helper function to return new refrence from an object
 * @param obj obj is a the object you want to deep clone
 * @returns a deep cloned object
 */
export const cloneDeep = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));