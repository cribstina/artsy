import Image from 'next/image'
import styles from './page.module.css'
import ResponsiveAppBar from './components/Header'
import * as React from 'react'
import ButtonUsage from './components/ButtonUsage'

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <ButtonUsage />
    </div>
  )
}
