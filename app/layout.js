// app/layout.js
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
  title: 'Memetool.ai',
  description: 'Your one-stop destination for all things memeland',
}
 
export default function RootLayout({ children }) {
 return (
    <UserProvider >
      <html lang="en">
        <body className="inter.className">{children}</body>
      </html>
    </UserProvider>
  )
}
