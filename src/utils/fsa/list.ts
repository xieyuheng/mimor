import { arrayFromAsyncIterable } from '../arrayFromAsyncIterable'
import { promiseAllFulfilled } from '../promiseAllFulfilled'

export async function list(
  handle: FileSystemDirectoryHandle,
): Promise<Array<string>> {
  const handles = await arrayFromAsyncIterable(handle.values())

  const lists = await promiseAllFulfilled(
    handles.map(async (handle) => {
      switch (handle.kind) {
        case 'file': {
          return [handle.name]
        }

        case 'directory': {
          return (await list(handle)).map((path) =>
            [handle.name, path].join('/'),
          )
        }
      }
    }),
  )

  return lists.flatMap((list) => list)
}
