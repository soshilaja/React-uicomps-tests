import React, { useState } from 'react';

function Form(props) {
    const [isChecked, setIsChecked] = useState(false);

    function handleOnChange(){
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <form>
            <label htmlFor="fname">First name:</label>
            <input type="text" data-testid="fname" name="fname"></input><br></br>
            <label htmlFor="lname">Last name:</label>
            <input type="text" data-testid="lname" name="lname"></input><br></br>
            <input type="checkbox" data-testid="subject" name="subject" value="Like" onChange={handleOnChange} />Like<br></br>
            <input type="radio" data-testid="html" name="fav_language" value="HTML"></input>
            <label htmlFor="html">HTML</label><br></br>
            <input type="radio" data-testid="css" name="fav_language" value="CSS"></input>
            <label htmlFor="css">CSS</label><br></br>
            <input type="radio" data-testid="javascript" name="fav_language" value="JavaScript"></input>
            <label htmlFor="javascript">JavaScript</label>
            </form>
        </div>
    );
}

export default Form;