function NameListItem(props){
    console.log( props )
    return(
        <li>{props.texto} { props.otraProp} </li>
    )
}

export default NameListItem