import React from 'react'
import css from './ListArea.module.css'
import { formatCurrency } from '../utils/util'

const ListArea = ({ data, setData }) => {
  const handleListRemove = id => {
    const remove = confirm('정말로 삭제하시겠습니까?')
    if (remove) {
      setData(data => {
        const newList = data.filter(list => list.id !== id)
        localStorage.setItem('List', JSON.stringify(newList))
        return newList
      })
    }
  }

  return (
    <div className={css.mainCon}>
      <h2>내역</h2>
      {data.map(list => (
        <div
          key={list.id}
          className={`${css.listCon} ${list.type === 'income' ? css.listIncome : css.listExpense}`}
        >
          <div className={css.moneyDetail}>
            <p>{list.title}</p>
            <p className={list.type === 'income' ? css.income : css.expense}>
              {list.type === 'income'
                ? `+₩${formatCurrency(Number(list.money))}`
                : `-₩${formatCurrency(Number(list.money))}`}
            </p>
          </div>

          <i className="bi bi-trash3-fill" onClick={() => handleListRemove(list.id)}></i>
        </div>
      ))}
    </div>
  )
}

export default ListArea
