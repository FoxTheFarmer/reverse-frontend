import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import NavBar from './components/NavBar'

// Route-based code splitting
const Farms = lazy(() => import('./views/Farms'))
const Pools2 = lazy(() => import('./views/Pools2'))
const Pools = lazy(() => import('./views/Pools'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <NavBar>
        .
      </NavBar>
        <Suspense fallback>
          <Switch>

            {/*
            <Route path="/" exact>
            <Farms />
            </Route>
            <Route path="/pools">
              <Farms />
            </Route>

            <Route path="/bonding">
              <Pools2/>
            </Route>

            <Route path="/stake">
              <Pools/>
            </Route>

            */ }
            <Route component={NotFound} />
          </Switch>
        </Suspense>
    </Router>
  )
}

export default React.memo(App)
