export default function ({ store, next, router }) {
  if (store.state.auth.details) {
    return router.push({ name: 'home' })
  }

  return next()
}
