const Button = ({bgColor, color, size, text, borderRadius}) => {
    return ( 
        <button 
            type="button"
            style={{background: bgColor, color, borderRadius}}
            className={`text-${size} p-2 md:p-3 hover:drop-shadow-sm`}
        >
            {text}
        </button>
     );
}
 
export default Button;