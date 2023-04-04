import './globals.css'

export const metadata = {
  title: 'Territorios',
  description: 'Territorios Alto do baeta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className=' dark:bg-gray-500 dark:border-gray-700'>{children}</body>
    </html>
  )
}
