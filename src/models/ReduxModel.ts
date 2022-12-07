export default interface ReduxModel<T> {
  loading: boolean,
  error: boolean | string
  body?: T
}
