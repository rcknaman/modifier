import React,{useState} from 'react'
export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log('uppercase btn clicked!');
        setText(text.toUpperCase());
        props.showAlert('Converted to uppercase','success');
    }
    const handleDownClick=()=>{
        console.log('uppercase btn clicked!');
        setText(text.toLowerCase());
        props.showAlert('Converted to lowercase','success');
    }
    const handleOnChange=(e)=>{
        console.log('change occured!');
        setText(e.target.value);
    }
    const clear=function(e){
        setText('');
    }
    const copy=function() {
        navigator.clipboard.writeText(text);
      }
    const [text,setText]=useState('');
    return (
        <>
        <h3>{props.heading}</h3>

        <div className="mb-3" >
            <textarea className="form-control" placeholder="enter text here" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={clear}>All clear</button>
        <button className="btn btn-primary mx-2" onClick={copy}>Copy to clipboard</button>       
        <h2 className='my-3'>Your text summary</h2>

        <p>your text currently consists of <b>{text.split(' ').length}</b> words and <b>{text.length}</b> characters.
        Avg time for read is <b>{0.004*text.split(' ').length} minutes.</b>
        
        </p>
        <h4 className='my-3'>Overview</h4>
        <p>{text}</p>
        </>
    )
}
