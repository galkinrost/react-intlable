const createFormatDate = context => (date, options) => {
    const dateTimeFormatter = new Intl.DateTimeFormat(context.locale, options)

    return dateTimeFormatter.format(date)
}

export default createFormatDate