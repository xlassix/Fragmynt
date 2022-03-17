import styles from "../../styles/util/coloredBox.module.css"

function ColoredBox({children, id}){
    console.log(children)
    return(
        <div className={styles.box} id={id}>
            {children}
        </div>
    )
}

export default ColoredBox;