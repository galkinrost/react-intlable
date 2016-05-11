# React intlable [![Build Status](https://travis-ci.org/babotech/react-intlable.svg?branch=master)](https://travis-ci.org/babotech/react-intlable)
[intl-messageformat](https://github.com/yahoo/intl-messageformat) bindings for React

## Installation

```
npm install --save intl-messageformat react-intlable
```

## Implementation

```javascript
import React from 'react'
import { IntlableProvider } from 'react-intlable'

import Application from './Application'

const { messages, locale } = window.__LOCALE_DATA__

const ApplicationContainer = () => (
  <IntlableProvider messages={messages} locale={locale}>
    <Application />
  </IntlableProvider>
)
```

## Decorator

```javascript
import React from 'react'
import { intlable } from 'react-intlable'

const Application = ({formatMessage, formatDate, formatNumber}) => (
  <div>
    <h1>{formatMessage(`application.greeting`, { name: `World`})}</h1>
    <p>{formatDate(new Date())}</p>
    <p>{formatNumber(100, { style: `currency`, currency: `USD`, currencyDisplay: `symbol` })</p>
  </div>
)

export default intlable(Application)
```

## Messages
Simple object

```javascript
{
  application: {
    greeting: `Hello {name}!`
  }
}
```

## Browser support
[Can i use](http://caniuse.com/#feat=internationalization)


If you want fully cross browser support, these steps for you:

### Install inlt polyfill

```
npm install --save intl
```

### Use ready loader

```javascript
import AppContainer from './AppContainer'
import React from 'react'
import ReactDOM from 'react-dom'
import {ready} from 'react-intlable'

import pathToLocale from 'intl/locale-data/json/en.json'

ready(pathToLocale, () => {
    ReactDOM.render(<AppContainer />, document.getElementById(`app`))
})
```

pathToLocale is a public url for localization data required by intl polyfill

If you use webpack, you can use file-loader to get this url
```javascript
{
    test: /\.json$/,
    loader: `file?name=[hash].[ext]`
}
```

### Universal rendering

[Example](https://github.com/babotech/one-more-react-universal-example)

For consistent results of internationalization you should use polyfill both on server and client 

On server

```javascript
global.Intl = require(`intl`)
require(`intl/locale-data/jsonp/en.js`)
require(`intl/locale-data/jsonp/eu.js`)
...
```

And force loading required data on client
```javascript
ready(pathToLocale, () => {
    ReactDOM.render(<AppContainer />, document.getElementById(`app`))
}, true)
```
