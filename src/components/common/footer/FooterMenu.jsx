import React, {useState} from 'react'
import './footer.css'
export default function FooterMenu({content}) {
    const [buttonState, setButtonState] = useState(false);

    const handleClick = ()=>{
        return setButtonState(!buttonState)
    }
    const handleClassName = ()=>{
        return buttonState?'footer-menu-subitems':'footer-menu-subitems-active';
    }

  return (
    <div>
        <div className='footer-menu-button-container'>
            <button className='footer-menu-button' onClick={()=>{handleClick()}}>{content.title }</button>
            <div>{buttonState?' -':' +'}</div>
        </div>
        
        {content.items.map((content, index)=>(
            <p className={handleClassName()} key={index}>{content.title}</p>
        ))}
    </div>
  )
}
