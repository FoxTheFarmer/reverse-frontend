import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import styled from 'styled-components'
import { FaBurn, FaQuestionCircle } from 'react-icons/fa'
import TokenInput from '../../../components/TokenInput'
import useI18n from '../../../hooks/useI18n'
import { getFullDisplayBalance } from '../../../utils/formatBalance'

const Blablabla = styled.div`
  text-color: red;
  margin: 0px 50px;
  margin-bottom: 5px;
  text-align: center;
  line-height: 20px;
`

const GuideLink = styled.span`
  color: #0073ff;
`


const StyledBtn = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0,0) !important;
  border: 1px;
  border-style: solid !important;
  border-color: #ffff !important;
  border-radius: 10px;
  color: #ffff;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
  display: inline-flex;
  min-height: 18px;
  max-height: 30px;
  max-width: 100px;
  padding: 25px;
  `

  const StyledBtn2 = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0,0) !important;
  border: 1px;
  border-style: solid !important;
  border-color: #ffff !important;
  border-radius: 10px;
  color: #ffff;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
  display: inline-flex;
  min-height: 18px;
  max-height: 30px;
  max-width: 108px;
  padding: 25px;

  text-shadow: 0px 0px 10px #fff;

  box-shadow: 0px 0px 8px #fff;
  `

interface DepositModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
}

const DepositModal: React.FC<DepositModalProps> = ({ max, onConfirm, onDismiss, tokenName = '' }) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal 
    title={`${TranslateString(999, 'Bond')} ${tokenName}`} onDismiss={onDismiss}>

      <TokenInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
      />
      <ModalActions>
        <StyledBtn onClick={onDismiss}>
          {TranslateString(462, 'Cancel')}
        </StyledBtn>
        <StyledBtn2
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val)
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? TranslateString(4288, '.....') : TranslateString(4624, 'Confirm')}
        </StyledBtn2>
      </ModalActions>
    </Modal>
  )
}

export default DepositModal
