export default interface ServiceModel<T> {
  error: boolean | string,
  body?: T
}
