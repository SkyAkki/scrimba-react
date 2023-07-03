export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    function holdToggle(event){
        props.setHold(event,props.id)
    }
    return(
        <li onClick={holdToggle} style={styles}>{props.value}</li>
    )
}