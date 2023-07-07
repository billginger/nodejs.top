import './globals.css'

const RootLayout = ({ children }) => (
  <html lang="zh-Hans">
    <body>
      <header>
        <h1>nodejs.top</h1>
      </header>
      {children}
      <footer>
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
