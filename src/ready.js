const successStatus = 200

const getJSON = (url, cb) => {
    const xhr = new XMLHttpRequest()
    xhr.open(`get`, url, true)
    xhr.responseType = `json`
    xhr.onload = () => {
        const status = xhr.status
        if (status === successStatus) {
            const response = typeof xhr.response === `string` ?
                                JSON.parse(xhr.response) : xhr.response
            return cb(null, response)
        }

        cb(status)
    }
    xhr.send()
}

const ready = (localeDataUrl, run, forceLoadPolyfill) => {
    document.addEventListener(`DOMContentLoaded`, () => {
        if (forceLoadPolyfill || !global.Intl) {
            return require.ensure([
                `intl`
            ], (require) => {
                global.Intl = require(`intl`)
                getJSON(localeDataUrl, (err, data) => {
                    global.Intl.__addLocaleData(data)
                    run()
                })
            })
        }
        run()
    })
}

export default ready
