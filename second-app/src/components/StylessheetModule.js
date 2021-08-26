import React from 'react'
import './appstyles.css'
import styles from './appStyles.module.css'

function StylessheetModule() {
    return (
        <div>
            <h1 className="error">Error</h1>
            <h1 className={styles.success}>success</h1>
            
        </div>
    )
}

export default StylessheetModule
