export function emitEvent<T>(name: string, data: T) {
  dispatchEvent(
    new CustomEvent<T>(name, {
      detail: data,
    })
  );
}

export function listenEvent<T>(
  name: string,
  cb: (event: CustomEvent<T>) => void
) {
  window.addEventListener(name, cb);
}
