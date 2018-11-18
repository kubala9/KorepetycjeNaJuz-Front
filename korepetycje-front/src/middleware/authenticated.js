export default function ({ store, next, router }) {
  if (!store.state.auth.token) {
    return router.push({ name: 'logowanie' })
  }

  return next()
}
