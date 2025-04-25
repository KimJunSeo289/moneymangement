import React, { useEffect, useState } from 'react'
import css from './MainPage.module.css'
import MoneyArea from '../component/MoneyArea'
import AdditionArea from '../component/AdditionArea'
import ListArea from '../component/ListArea'

const MainPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const listData = JSON.parse(localStorage.getItem('List'))
    if (!listData) {
      localStorage.setItem('List', JSON.stringify([]))
    } else {
      setData(listData)
    }
  }, [])

  return (
    <main>
      <div className={css.mainCon}>
        <h1>용돈기입장</h1>
        <MoneyArea data={data} />
        <div className={css.flexArea}>
          <AdditionArea setData={setData} />
          <ListArea setData={setData} data={data} />
        </div>
      </div>
    </main>
  )
}

export default MainPage
