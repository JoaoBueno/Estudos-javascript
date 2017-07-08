const areIntlLocalesSupported = require( 'intl-locales-supported' )

const localesMyAppSupports = [
  /* list locales here */
]

if ( global.Intl ) {
  // Determine if the built-in `Intl` has the locale data we need.
  if ( !areIntlLocalesSupported( localesMyAppSupports ) ) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    const IntlPolyfill = require( 'intl' )
    Intl.NumberFormat = IntlPolyfill.NumberFormat
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = require( 'intl' )
}

const app = require( 'express' )()
const appLocales = [ 'de', 'en', 'fr' ]

app.get( '/', function ( req, res ) {
  const locale = req.acceptsLanguages( appLocales ) || 'en'
  // ...customize the response to locale
  console.log( locale )
} )
