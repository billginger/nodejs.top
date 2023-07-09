import Link from 'next/link'
import './globals.css'

const RootLayout = ({ children }) => (
  <html lang="zh-Hans">
    <body>
      <header className="bg-[#31475c] text-white font-[MarcellusSC]">
        <div className="container mx-auto flex justify-between px-8 pt-8 pb-24">
          <h1 className="text-4xl">Nodejs.top</h1>
          <nav>
            <Link className="inline-block m-1 p-2 bg-[#00000033]" href="/">BLOG</Link>
            <Link className="inline-block m-1 p-2 hover:bg-[#ffffff11] hover:shadow-lg" href="/about">ABOUT</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="text-center text-neutral-500">
        <p>&copy; 2023 nodejs.top</p>
        <p>
          <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备19003000号</a>
        </p>
      </footer>
    </body>
  </html>
)

export const metadata = {
  title: 'Nodejs.top',
  description: 'A technology sharing site',
}

export default RootLayout
