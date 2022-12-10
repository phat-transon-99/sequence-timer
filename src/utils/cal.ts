export default function getMiddleItem<T>(items: T[]): { item: T, position: number } {
  return { item: items[Math.ceil(items.length / 2.0)], position: Math.ceil(items.length / 2.0) };
}
