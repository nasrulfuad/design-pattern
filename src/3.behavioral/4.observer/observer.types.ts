interface ISubject {
  add(observer: IObserver): void;
  remove(observer: IObserver): void;
  notify(): void;
}

interface IObserver {
  name: string;
  update(subject: ISubject): void;
}

export { ISubject, IObserver };
