'use client'

import { useSearchParams } from 'next/navigation'

const CategoryActive = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || '全部'
  return (
    <div className="pb-4 font-[MarcellusSC]">{category}</div>
  )
}

export default CategoryActive
