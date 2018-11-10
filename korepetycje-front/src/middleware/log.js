export default function ({ next, to }) {
  console.log(to.name)
  return next()
}
