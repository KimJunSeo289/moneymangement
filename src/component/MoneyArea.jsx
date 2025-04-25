import React, { useEffect, useState } from 'react'
import css from './MoneyArea.module.css'
import { formatCurrency } from '../utils/util'

const MoneyArea = ({ data }) => {
  const [total, setTotal] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    const incomeData =
      data === null
        ? 0
        : data.filter(data => data.type === 'income').reduce((a, b) => a + Number(b.money), 0)

    const expenseData =
      data === null
        ? 0
        : data.filter(data => data.type === 'expense').reduce((a, b) => a + Number(b.money), 0)

    setIncome(incomeData)
    setExpense(expenseData)
    setTotal(incomeData - expenseData)
  }, [data])

  return (
    <div className={css.mainCon}>
      <div className={css.moneyCon}>
        <p>잔액</p>
        <strong>₩{formatCurrency(total)}</strong>
      </div>
      <div className={css.useMoney}>
        <div className={css.incomeCon}>
          <p>수입</p>
          <strong>₩{formatCurrency(income)}</strong>
        </div>
        <div className={css.expenseCon}>
          <p>지출</p>
          <strong>₩{formatCurrency(expense)}</strong>
        </div>
      </div>
    </div>
  )
}

export default MoneyArea
