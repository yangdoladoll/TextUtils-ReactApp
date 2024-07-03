import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = () => {
        //  console.log("button was clicked"+ Text);
        const newText=Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","Success");
    }
    const handleLoClick = () => {
        //  console.log("button was clicked"+ Text);
        const newText=Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","Success");
    }
    const handleclearonClick = () => {
        //  console.log("button was clicked"+ Text);
        const newText=("");
        setText(newText);
        props.showAlert("Cleared Text","Success");
    }
    const removespaceonClick = () => {
        //  console.log("button was clicked"+ Text);
        const newText=Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Space has been removed","Success");
    }
    const handleOnChange=(Event)=>{
        setText(Event.target.value);
    }
    
    const[Text, setText] = useState('');
    return (
    <>
    <div className="container my-2" >
        <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'darkgrey':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{color: props.mode==='light'?'black':'white'}}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} style={{color: props.mode==='light'?'black':'white'}}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearonClick} style={{color: props.mode==='light'?'black':'white'}}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={removespaceonClick} style={{color: props.mode==='light'?'black':'white'}}>Remove Extra Spaces</button>
        
        </div>

        <div className="container my-4"style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Text Words and Character Count</h2>
            <p>{Text.endsWith("")?Text.split(' ').length-1:Text.split(' ').length} words and {Text.length} Characters</p>

            <h2>Preview</h2>
            <strong><p>{Text.length>0?Text:"Please enter something in the Textarea to preview it here"}</p></strong> 
        </div>
        </div>
    </>
    
    )
}