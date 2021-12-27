export const createBEM = (prefixCls: string) => {
  return (className: string = '') => {
    if (className === '') {
      return prefixCls
    }

    return `${prefixCls}-${className}`
  }
}

export const t = (key: string, options?: object): string => {
  // @ts-ignore
  return (globalThis as any)?.WhaleIntl?.t(key, options) || key;
};
