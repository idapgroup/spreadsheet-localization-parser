// utility type for required one of key in interface
export type RequireOne<T, Keys extends keyof T = keyof T> = Keys extends keyof T
  ? Partial<T> & Required<Pick<T, Keys>>
  : never;
