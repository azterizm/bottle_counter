import { LocalStorage } from "node-localstorage"

(async () => {
	const s = new LocalStorage('./bottles')
	s.clear()
	process.exit(1)
})()
