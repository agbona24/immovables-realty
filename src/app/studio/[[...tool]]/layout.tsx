export const metadata = {
  title: 'Sanity Studio - Immovables Realty CMS',
  description: 'Content management system for Immovables Realty',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
