import React, { useState } from 'react'
import css from './AdditionArea.module.css'
//import { useSelector } from 'react-redux'

const AdditionArea = ({ setData }) => {
  const [title, setTitle] = useState('')
  const [money, setMoney] = useState('')
  const [type, setType] = useState('income')
  //   const data = useSelector(state => state.moneyList)
  //   console.log(data)

  const handleListAdd = () => {
    if (!title.trim() || !money.trim()) return alert('모든 값을 입력해 주세요.')
    if (isNaN(money)) return alert('금액은 숫자만 입력해주세요.')

    const getId = JSON.parse(localStorage.getItem('List'))
    let id = 0
    getId.map(list => (id = Math.max(id, list.id)))
    id++

    console.log('getId', id)

    const list = {
      id,
      title,
      money,
      type,
    }

    const listJSON = JSON.parse(localStorage.getItem('List')) || []
    const updateList = [...listJSON, list]

    localStorage.setItem('List', JSON.stringify(updateList))

    setData(updateList)

    setTitle('')
    setMoney('')
  }

  const handleType = async value => {
    setType(value)
  }
  return (
    <div className={css.mainCon}>
      <h2>새로운 거래 추가</h2>
      <div className={css.additionCon}>
        <p>텍스트</p>
        <input
          onChange={e => setTitle(e.target.value)}
          value={title}
          placeholder="내용 입력"
        ></input>
        <div className={css.selectCon}>
          <button
            className={type === 'income' ? css.activeButton : ''}
            onClick={() => handleType('income')}
          >
            수입
          </button>
          <button
            className={type === 'expense' ? css.activeButton : ''}
            onClick={() => handleType('expense')}
          >
            지출
          </button>
        </div>
        <input
          onChange={e => setMoney(e.target.value)}
          value={money}
          placeholder="금액 입력"
        ></input>
        <button className={css.submitBtn} onClick={() => handleListAdd()}>
          거래 추가
        </button>
      </div>
    </div>
  )
}

export default AdditionArea
