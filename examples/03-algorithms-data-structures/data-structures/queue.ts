export function Queue(initialValues: unknown[] = []) {
  let queue: unknown[] = initialValues;
  return {
    get() {
      return [...queue];
    },
    enqueue(value: unknown | unknown[]) {
      if (Array.isArray(value)) {
        queue = [...queue, ...value];
      } else {
        queue = [...queue, value];
      }
      return this.get();
    },
    dequeue() {
      return queue.shift()
    },
    clear() {
      queue = [];
      return this.get();
    }
  };
}