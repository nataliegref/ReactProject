function Button(props) {
    const buttonStyle = {
        color : props.color, 
        fontSize : props.fontSize + 'px'
    };
    return (
      <button onClick = {props.handleClick} style = {buttonStyle}>{props.text}</button>
    )
  }
Button.defaultProps = {
    text: "Click",
    color:"blue",
    fontSize: 14,
} 
function ButtonApp() {
    const handleButtonClick = () => {
        window.location.href = "http://www.nataliegref.com";
    }
    return (
      <div>
        <Button />
        <Button handleClick = {handleButtonClick} text = "Dont' click" color = "red" fontSize = {20}/>
        <Button fontSize = {18}/>
      </div>
    )
  }

  export default ButtonApp;