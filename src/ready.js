const ready = (locale, run) => {
    document.addEventListener(`DOMContentLoaded`, () => {
        if (!global.Intl) {
            require.ensure([
                `intl`,
                `intl/locale-data/jsonp/${locale}.js`
            ], (require) => {
                require(`intl`);
                require(`intl/locale-data/jsonp/${locale}.js`);
                run()
            });
        }
        run()
    })
}

export default ready