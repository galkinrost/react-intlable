import Intl from 'intl'

const createFormatNumber = context => (number, options) => {
    const numberFormatter = Intl.NumberFormat(context.locale, options)

    return numberFormatter.format(number)
}

export default createFormatNumber