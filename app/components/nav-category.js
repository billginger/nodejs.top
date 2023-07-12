'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Category from './category'
import './nav-category.css'

// TODO: Get navLinks from props
const navLinks = [
  { name: '随笔', amount: 1 },
  { name: '软件', amount: 2 },
  { name: '编程', amount: 3 },
]

const NavCategory = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const classActive = 'font-semibold'
  const classNormal = 'hover:font-semibold hover:text-[--theme-color]'
  const total = navLinks.reduce((total, obj) => (total + obj.amount), 0)
  return (
    <nav className="nav-category">
      <div className="pl-6 pb-2">
        <Link className={!category ? classActive : classNormal} href='/blog'>全部</Link>
        <span className="text-neutral-400"> ({total})</span>
      </div>
      {navLinks.map(link => (
        <div className="pl-6 pb-2" key={link.name}>
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
