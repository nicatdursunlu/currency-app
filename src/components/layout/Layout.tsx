import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import { AppSpinner } from 'components/common/AppSpinner'
import { AppHeader } from './AppHeader'

const Home = lazy(() => import('pages/Home/index'))
const ExchangeRates = lazy(() => import('pages/ExchangeRates/index'))

export const Layout: React.FC = () => {
  return (
    <Suspense fallback={<AppSpinner />}>
      <AppHeader />
      <main style={{ marginTop: 65 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/exchange-rates" component={ExchangeRates} />
        </Switch>
      </main>
    </Suspense>
  )
}
