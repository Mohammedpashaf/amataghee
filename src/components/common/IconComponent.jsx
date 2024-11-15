function IconComponent(props) {
    return(
        <img src={props.img} className={props.className} alt={props.alt}/>
    );
}
export default IconComponent;