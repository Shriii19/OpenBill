export function route(method: "get" | "post" | "put" | "patch" | "delete", path: string) {
  return function (target: any, propertyKey: string) {
    if (!target.__routes__) {
      target.__routes__ = [];
    }
    target.__routes__.push({ method, path, handler: propertyKey });
  };
}
