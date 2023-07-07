import './globals.css'

export const metadata = {
  title: 'Nodejs.top',
  description: 'A technology sharing site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  )
}
