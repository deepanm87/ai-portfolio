import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Portfolio",
  description: "Customizable AI portfolio"
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}