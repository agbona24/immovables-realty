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
    <div style={{ margin: 0, padding: 0, position: 'fixed', inset: 0, zIndex: 9999 }}>
      {children}
    </div>
  )
}
