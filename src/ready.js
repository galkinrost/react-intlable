const getJSON = (url, cb) => {
    const xhr = new XMLHttpRequest()
    xhr.open(`get`, url, true)
    xhr.responseType = `json`
    xhr.onload = () => {
        const status = xhr.status
        if (status == 200) {
            cb(null, xhr.response)
        } else {
            cb(status)
        }
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