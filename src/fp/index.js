export const compose = (...fns) =>
  fns.reduce(
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
    value => value
  )

export const when = (cond, f) => x => (cond ? f(x) : x)
