import React from 'react'
import styles from './UploadIconSvg.module.css'

interface UploadIconSvgI {
  classing?: string
}

const UploadIconSvg = ({ classing = '' }: UploadIconSvgI) => {
  return (
    <svg
      className={`${classing} ${styles.UploadIconSvg}`}
      viewBox="0 0 24 24"
      id="upload-alt-3"
    >
      <path d="M22,12.84a.88.88,0,0,0,0-.16l-3-9a1,1,0,0,0-1.9.64L19.61,12H16a1,1,0,0,0-1,1,3,3,0,0,1-6,0,1,1,0,0,0-1-1H4.39L7,4.32a1,1,0,1,0-1.9-.64l-3,9a.88.88,0,0,0,0,.16A.76.76,0,0,0,2,13v7a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V13A.76.76,0,0,0,22,12.84Z"></path>
      <path d="M9.71,6.71,11,5.41V11a1,1,0,0,0,2,0V5.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3h0a1.15,1.15,0,0,0-.33-.21.94.94,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21h0l-3,3A1,1,0,0,0,9.71,6.71Z"></path>
    </svg>
  )
}

export default UploadIconSvg
