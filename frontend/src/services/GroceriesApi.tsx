import type GroceryList from '@/models/GroceryList'

async function getGroceriesList (): Promise<GroceryList> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/groceries`, { method: 'GET' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

const GroceriesApi = {
  getGroceriesList
}

export default GroceriesApi
