export const createBEM = (prefixCls) => {
  return (className = "") => {
    if (className === "") {
      return prefixCls;
    }
    return `${prefixCls}-${className}`;
  };
};
export const t = (key, options) => {
  return globalThis?.WhaleIntl?.t(key, options) || key;
};
