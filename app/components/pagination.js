'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

// TODO: 根据页数和当前页码生成导航链接 1 ... 4 [5] 6 ... 9
const Pagination = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const href = !category ? '/blog?page=' : `/blog?category=${category}&page=`
  const classCommon = 'inline-block mx-1 w-8 h-8 leading-8 border '
  const classActive = classCommon + 'border-[--theme-color] bg-[--theme-color] text-white'
  const classNormal = classCommon + 'border-[#ccc] hover:font-semibold hover:text-[--theme-color] ' +
    'hover:border-[--theme-color]'
  return (
    <div className="pt-10 pb-6 text-center border-t border-neutral-200">
      <Link className={classActive} href={`${href}1`}>1</Link>
      <Link className={classNormal} href={`${href}2`}>2</Link>
      <Link className={classNormal} href={`${href}3`}>3</Link>
    </div>
  )
}

export default Pagination
