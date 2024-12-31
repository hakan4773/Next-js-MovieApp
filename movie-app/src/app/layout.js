import Header from "./components/Header"
import "../styles/globals.css"
import Providers from "./Providers"

export const metadata = {
  title: 'Movie',
}

export default function Layout({ children }) {
  return (
    <html lang="en"  className="dark" style={{ colorScheme: "dark" }}>
      <body>
        <Providers>
             <Header />
             {children}
        </Providers>
        </body>
    </html>
  )
}
