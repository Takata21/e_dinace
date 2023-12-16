import React from 'react'
import styles from './Loader.module.css'
export const Loader = () => {
  return (
    
<div className={styles.container}>
  <div className='flex flex-col items-center justify-center'>
    <div className={styles.universe}>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
    <p className={styles.text}>Cargando... Por favor, espera.</p>
    
  </div>
</div>
  )
}
