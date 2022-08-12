import { createRef, useLayoutEffect, useState } from 'react'
import styles from '../styles/Main.module.css'

function Main() {
  const mainRef = createRef();
  const [dims, setDims] = useState({width:0, height:0})

  useLayoutEffect(() => {
    const newWidth = mainRef.current.offsetWidth
    const newHeight = newWidth*9/20
    setDims({
      width: newWidth,
      height: newHeight
    })
  }, [])

  const heightStyle = {
    height: dims.height
  }

  console.log("Main rendered")

  const gridItems = []
  for (let i=0; i<25; i++) {
    const item = (
      <div key={i} className={styles.gridItem}>{i+1}</div>
    )
    gridItems.push(item)
  }
  
  return (
    <section className="Main" ref={mainRef} style={heightStyle}>
      {gridItems}
    </section>
  )
}

export default Main