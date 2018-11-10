export default function ({ store, redirect }) {
  if (!store.state.auth.details) {
    return redirect('/logowanie')
  }
}
