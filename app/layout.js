import Nav from './components/nav'
import './globals.css'

const RootLayout = ({ children }) => (
  <html lang="zh-Hans">
    <body>
      <header className="bg-[#31475c] text-white font-[MarcellusSC]">
        <div className="container mx-auto flex justify-between px-8 pt-8 pb-24">
          <div className="text-4xl">Nodejs.top</div>
          <Nav />
        </div>
      </header>
      <main className="container mx-auto px-6 pb-12 -mt-16">
        <div className="bg-[#fff] p-16 shadow-lg">
          {children}
        </div>
      </main>
      <footer className="text-center text-neutral-500">
        <div>&copy; 2023 nodejs.top</div>
        <div className="text-sm pt-2 pb-4">
          <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备19003000号</a>
        </div>
      </footer>
    </body>
  </html>
)

export const metadata = {
  title: 'Nodejs.top',
  description: 'A technology sharing site',
}

export default RootLayout
