import '../styles/globals.scss'
import '../styles/components/Navbar.scss'
import '../styles/components/Hero.scss'
import '../styles/components/HowItWorks.scss'
import '../styles/components/Features.scss'
import '../styles/components/Benefits.scss'
import '../styles/components/CTASection.scss'
import '../styles/components/Footer.scss'

export const metadata = {
  title: 'TrustGraph',
  description: 'AI-Powered Fact-Checking Terminal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
} 