interface IBlogPost<T = any> {
  execute(params: T): T;
}

export { IBlogPost };
