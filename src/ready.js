const getJSON = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(`get`, url, true)
        xhr.responseType = `json`
        xhr.onload = () => {
            var status = xhr.status
            if (status == 200) {
                resolve(xhr.response)
            } else {
                reject(status)
            }
        }
        xhr.send()
    })
}

const ready = (localeDataUrl, run, forceLoadPolyfill) => {
    document.addEventListener(`DOMContentLoaded`, () => {
        if (forceLoadPolyfill || !global.Intl) {
            return require.ensure([
                `intl`
            ], (require) => {
                global.Intl = require(`intl`)
                getJSON(localeDataUrl)
                    .then(data=> {
                        global.Intl.__addLocaleData(data)
                        run()
                    })
                    .catch(()=> {
                        run()
                    })
            });
        }
        run()
    })
}

export default ready