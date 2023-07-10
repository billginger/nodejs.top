'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'BLOG', href: '/blog' },
  { name: 'ABOUT', href: '/about' },
]

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav>
      {navLinks.map(link => {
        const isActive = link.href == '/' && link.href == pathname || link.href != '/' && pathname.startsWith(link.href)
        let className = 'inline-block p-2 m-1 hover:bg-[#ffffff11] hover:shadow-lg'
        if (isActive) {
          className = 'inline-block p-2 m-1 bg-[#00000033]'
        }
        return (
          <Link className={className} href={link.href} key={link.name}>{link.name}</Link>
        )
      })}
    </nav>
  )
}

export default Nav
