const createFormatNumber = context => (number, options) => {
    const numberFormatter = new Intl.NumberFormat(context.locale, options)

    return numberFormatter.format(number)
}

export default createFormatNumber