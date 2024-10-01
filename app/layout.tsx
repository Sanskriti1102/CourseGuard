import "./globals.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

export const metadata = {
  title: "CourseGuard",
  description: "Your E-learning Platform",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
