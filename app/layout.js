// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Memetool.ai',
  description: 'Your one-stop destination for all things memeland',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="inter.className">{children}</body>
    </html>
  )
}
