import { QuoteToken, PoolCategory, Pool2Config } from './types'

const pools2: Pool2Config[] = [
  {
    sousId: 1,
    tokenName: 'UST',
    quoteTokenSymbol: QuoteToken.UST,
    stakingTokenName: QuoteToken.UST,
    // this is UST
    stakingTokenAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
    quoteTokenPoolAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
    tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
    contractAddress: {
      1666700000: '0xA144063168d7d08B61D1870eC1AA1030Cb9fC4E8',
      1666600000: '0xA144063168d7d08B61D1870eC1AA1030Cb9fC4E8',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.app.artemisprotocol.one',
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
    isSingleAsset: true,
    isDepositFinished: false,
    startBlock: 19368333,
    endBlock: 19411533,
    lockBlock: 19411533,
    tokenDecimals: 18,
   },
   {
    sousId: 2,
    tokenName: 'RVRS & ONE LP',
    tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
    quoteTokenSymbol: QuoteToken.RVRS,
    quoteTokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
    stakingTokenName: QuoteToken.ONERVRS,
    stakingTokenAddress: '0xCDe0A00302CF22B3Ac367201FBD114cEFA1729b4',
    contractAddress: {
      1666700000: '0xEC7826201c7fCaDBd048C0226c861E1df2759F8D',
      1666600000: '0xEC7826201c7fCaDBd048C0226c861E1df2759F8D',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.app.artemisprotocol.one',
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
    isDepositFinished: false,
    startBlock: 19368333,
    endBlock: 19411533,
    lockBlock: 19411533,
    tokenDecimals: 18,
  }
]

export default pools2
