import * as React from 'react'
import { FormattedMessage, IntlProvider, useIntl } from 'react-intl';
import Test from '../components/Test';
import systemValues from '../i18n/i18next';

const LandingPage = () => {



  const [translations, setTranslations] = React.useState<any>({});
  const [locale, setLocale] = React.useState('en');

  // const compareValuesUpdates = (backendValues: any) => {
  //   const result = { ...systemValues };
  //   for (const key in backendValues) {
  //     if (key in result) {
  //       result[key] = backendValues[key];
  //     } else {
  //       result[key] = backendValues[key];
  //     }
  //   }
  //   return result
  // }

  React.useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        // const result = compareValuesUpdates(data?.products[0]);
        debugger
        setTranslations(data?.products[0]);
      });
  }, [locale]);


  return (
    <IntlProvider locale={locale} messages={translations}>
      {translations?.title}
      <h2>Type 1</h2>
      <FormattedMessage id="title" />
      <Test />
      <h2>Type 4</h2>1
      {systemValues.title}
    </IntlProvider>

  )
}

export default LandingPage