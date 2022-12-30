import * as React from 'react'
import { FormattedMessage, IntlProvider, useIntl } from 'react-intl';
import Test from '../components/Test';

const LandingPage = () => {



  const [translations, setTranslations] = React.useState<any>({});
  const [locale, setLocale] = React.useState('en');


  React.useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        debugger
        const result = data?.products[0];
        setTranslations(result);
      });
  }, [locale]);


  return (
    <IntlProvider locale={locale} messages={translations}>
      {translations?.title}
      <h2>Type 1</h2>
      <FormattedMessage id="title" />
      <Test />
    </IntlProvider>

  )
}

export default LandingPage