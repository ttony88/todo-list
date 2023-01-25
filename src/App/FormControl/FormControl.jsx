import styles from './FormControl.module.scss'

export const Input = ({input, meta, ...props}) => {

    let hasError = (meta.error && meta.touched)

    return(
        <>
            <input type='text'  {...input} {...props} />
            {hasError && <span className={styles.error}>{meta.error}</span>}
        </>
        
    )
}