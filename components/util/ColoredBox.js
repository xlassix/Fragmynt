import styles from "../../styles/util/coloredBox.module.css"

function ColoredBox({children}){
    console.log(children)
    return(
        <div className={styles.box}>
            {children}
        </div>
    )
}

export default ColoredBox;