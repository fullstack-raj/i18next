import * as React from 'react'
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

const LandingPage = () => {

  const [messages, setMessage] = React.useState();

  const fetchTranslations = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const result = await response.json();
    return result.products[0];
  }

  const loadTranslations = async () => {
    const transResult = await fetchTranslations();
    console.log(transResult, 'api result');
    setMessage(transResult);
  }

  React.useEffect(() => {
    loadTranslations();
  }, [])

  const messagesInFrench = {
    myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
  }


  return (
    <IntlProvider messages={messagesInFrench} locale="en" defaultLocale="en">
      <div>LandingPage</div>
      <FormattedMessage
        id="myMessage"
      />
 
    </IntlProvider>
  )
}

export default LandingPage