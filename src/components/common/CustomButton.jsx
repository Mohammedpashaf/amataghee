function CustomButton(props) {
  debugger
  const getClasname = props.customClass ? props.className : 'Custombtn';
    return(
      <div>
        <button className={getClasname}>{props.name}</button>
      </div>
        
    )
}

export default CustomButton;