import { Toaster } from 'react-hot-toast'
import './globals.css'
import Provider from '../../provider'


export const metadata = {
  title: 'RS Registration form',
  description: 'The Royal Shepherd Camp Registration form',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
        <Provider>
          <Toaster/>
            {children}
        </Provider>
        </body>
      </html>
    
  )
}
