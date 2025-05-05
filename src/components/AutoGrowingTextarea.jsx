import { useEffect, useRef } from "react"

function AutoGrowingTextarea({name,value,className,onChange}) {
    const textareaRef = useRef(null);
    const handleInput = () => {
        const el = textareaRef.current;
        if(el ){
            el.style.height= "auto";
            el.style.height = `${el.scrollHeight}px`;
        }
    }
    useEffect(() => {
        handleInput();
    }, [])
  return (
    <textarea
    ref={textareaRef}
    onInput={handleInput}
    name={name}
    value={value}
    className={className}
    onChange={onChange}
    />

  )
}
export default AutoGrowingTextarea