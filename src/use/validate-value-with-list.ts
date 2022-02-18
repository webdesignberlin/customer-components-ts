/**
 * check if validate list contains value validator function
 */
 export default function (value: string | Array<string|number> | null, list: Array<string|number> = []): boolean {
    if (!value) {
      return false;
    }
    if (typeof value === 'object') {
      const filtered = list.filter((mod) => value.includes(mod));
      return filtered.length > 0;
    }
    return list.includes(value);
  }
