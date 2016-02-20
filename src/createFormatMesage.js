import IntlMessageFormat from 'intl-messageformat'

const splitMessagePath = messagePath => messagePath.split(`.`)

export const traverseMessages = (messages, messagePath) => splitMessagePath(messagePath).reduce((cur, key) => cur[key], messages)

const createFormatMessage = context => (messagePath, params) => {
    const intlMessageFormat = new IntlMessageFormat(traverseMessages(context.messages, messagePath), context.locale)

    return intlMessageFormat.format(params)
}

export default createFormatMessage