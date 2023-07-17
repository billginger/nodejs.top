'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Category from './category'
import './nav-category.css'

const NavCategory = ({ categories }) => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const classActive = 'font-semibold'
  const classNormal = 'hover:font-semibold hover:text-[--theme-color]'
  const total = categories.reduce((total, obj) => (total + obj.amount), 0)
  return (
    <nav className="nav-category">
      <div>
        <Link className={!category ? classActive : classNormal} href='/blog'>全部</Link>
        <span className="text-neutral-400"> ({total})</span>
      </div>
      {categories.map(link => (
        <div key={link.name}>
          <Link className={link.name == category ? classActive : classNormal} href={`/blog?category=${link.name}`}>
            <Category>{link.name}</Category>
          </Link>
          <span className="text-neutral-400"> ({link.amount})</span>
        </div>
      ))}
    </nav>
  )
}

export default NavCategory
