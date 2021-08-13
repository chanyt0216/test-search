import React from 'react'
import Header from 'components/Layout/Header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}
