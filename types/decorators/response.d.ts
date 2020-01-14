export declare function prefix(path: string): (target: Function) => void;
export declare function disabled(): (proto: any, propertyKey?: string, descriptor?: PropertyDescriptor) => void;
export declare function json(): (proto: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare const JSON: typeof json;
export declare function redirect(path: string): (proto: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function type(type: string): (proto: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function header(key: string | {
    [key: string]: string;
}, value?: string): (proto: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function cache(callback: (cacheKey: string, shouldCacheData?: string) => Promise<string>): (proto: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
