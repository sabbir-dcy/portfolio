import React, { useRef, useEffect } from 'react'
import styles from './Cursor.module.css'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const cursorSRef = useRef(null)
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null)
      return;
    document.addEventListener('mousemove', e => {
      if (cursorRef.current == null)
        return;
      cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
    })
    document.addEventListener('mousemove', e => {
      if (cursorSRef.current == null)
        return;
      cursorSRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
    })
  }, [])
  return (
    <>
      <div className={styles.cursor} ref={cursorRef}>
      </div>
      <div className={styles.cursor__s} ref={cursorSRef}></div>
    </>
  )
}

export default CustomCursor