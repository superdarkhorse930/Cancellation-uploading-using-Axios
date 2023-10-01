import React from 'react'
import Styles from './UploadItem.module.css'

const UploadItem = props => {
  const { file, progress, cancelSource } = props.file

  const cancelUpload = () => {
    console.log("cancelSource:::", cancelSource)
    cancelSource.cancel('cancelled by user')
  }

  return (
    <div className={Styles.wrapperItem}>
      <div className={Styles.leftSide}>
        <div className={Styles.progressBar}>
          <div style={{ width: `${progress}%` }} />
        </div>
        <label>{file.name}</label>
      </div>
      <div>
        <span className={Styles.percentage}>{progress}%</span>
        <button onClick={cancelUpload} >cancel</button>
      </div>
    </div>
  )
}

export default UploadItem
