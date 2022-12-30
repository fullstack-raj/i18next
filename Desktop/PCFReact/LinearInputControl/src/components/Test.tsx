import * as React from 'react'
import { FormattedNumber } from 'react-intl'
import { useIntl } from 'react-intl';

const Test = () => {
    const intl  = useIntl();

    return (
        <div>
            <h2>type 2</h2>
            {intl.formatMessage({ id: 'title' })}
        </div>
    )
}

export default Test