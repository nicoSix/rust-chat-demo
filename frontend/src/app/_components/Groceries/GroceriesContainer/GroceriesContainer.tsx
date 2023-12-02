'use client'

import './styles.css'
import React, { useEffect } from 'react'
import GroceriesApi from '@/services/GroceriesApi'
import type GroceryList from '@/models/GroceryList'

const GroceriesContainer = (): React.JSX.Element => {
  useEffect(() => {
    void GroceriesApi.getGroceriesList()
      .then((res: GroceryList) => {
        console.log(res)
      })
  })

  return (
        <div>
            <span>Hello world!</span>
        </div>
  )
}

export default GroceriesContainer
