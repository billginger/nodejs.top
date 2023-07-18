import Nav from './components/nav'
import LinkGithub from './components/link-github'
import './globals.css'

const RootLayout = ({ children }) => (
  <html lang="zh-Hans">
    <body>
      <header className="bg-[--theme-color] text-white font-[MarcellusSC]">
        <div className="container mx-auto flex justify-between pt-8 pb-24 px-4 flex-col sm:px-8 sm:flex-row">
          <div className="text-center text-3xl pb-6 sm:text-4xl sm:pb-0">Nodejs.top</div>
          <div className="flex items-center justify-between sm:justify-start">
            <Nav />
            <LinkGithub />
          </div>
        </div>
      </header>
      <main className="container mx-auto pb-12 -mt-16 px-0 sm:px-6">
        <div className="bg-white shadow-lg px-4 py-8 sm:p-16">
          {children}
        </div>
      </main>
      <footer className="text-center text-neutral-500">
        <div>&copy; 2023 nodejs.top</div>
        <div className="text-sm pt-2 pb-8">
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
