import s from './config'

const pargs = process.argv

const all = pargs.includes('--show-all') || pargs.includes('-a')
const previous = pargs.includes('--previous-month') || pargs.includes('-p')
const month = pargs.includes('--month') || pargs.includes('-m')
const monthN =
  pargs[pargs.indexOf(pargs.includes('--month') ? '--month' : '-m') + 1]

let total = 0

const bottles: [string, number][] = []

for (let i = 0; i < s.length; i++) {
  const k = s.key(i)
  const v = s.getItem(k)
  if (!k || !v) continue
  const vn = Number(v)
  if (all) {
    total = total + vn
    bottles.push([k, vn])
  } else {
    const d = new Date(k.replaceAll('_', '/'))
    if (
      d.getMonth() ===
      (month ? Number(monthN) - 1 : new Date().getMonth() - (previous ? 1 : 0))
    ) {
      total = total + vn
      bottles.push([k, vn])
    }
  }
}

console.log('total', total)
bottles.forEach((b) => console.log(b[0], b[1]))
