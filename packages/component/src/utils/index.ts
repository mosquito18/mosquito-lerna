export let warn = (msg: string) => {};
export let error = (msg: string) => {};

if (process.env.NODE_ENV !== 'production') {
    warn = (msg) => {
        console.warn(' [UnitCenter warn]: ' + msg);
    };

    error = (msg) => {
        console.error(' [UnitCenter error]: ' + msg);
    };
}


export const t = (key: string, options?: any): string => {
    return (globalThis as any)?.WhaleIntl?.t(key, options) || key;
}