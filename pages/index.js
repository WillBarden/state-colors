import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

const STATES = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'flordia', 'georgia',
  'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts',
  'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey',
  'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennslyvania', 'rhode-island',
  'south-carolina', 'south-dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia', 
  'wisconsin', 'wyoming'
]



export default function Home() {
  const [color, setColor] = useState('red')
  const [usState, setUsState] = useState(rand_state())
  console.log(`color = ${color}`)
  console.log(`state = ${usState}`)

  function rand_state() {
    const i = Math.floor(Math.random() * STATES.length)
    return STATES[i]
  }

  async function onColorSubmit() {
    console.log('submit!')
    setUsState(rand_state())
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Choose a color for this U.S. state
        </h1>

        <p className={styles.description}>
          <select onChange={(e) => { setColor(e.target.value) }}>
            <option value='red'>Red</option>
            <option value='orange'>Orange</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
            <option value='purple'>Purple</option>
            <option value='violet'>Violet</option>
          </select>
          <button onClick={onColorSubmit}>Submit</button>
        </p>

        <div className={styles.grid}>
          <img src={`/${usState}-outline.jpg`}></img>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}