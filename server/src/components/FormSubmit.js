import React, {Component} from 'react';
import ImgUpload from './ImgUpload'

class FormSubmit extends Component {
    render() {
        return (
           <div>
               <h3>SUBMIT A NEW FUNGUS</h3>
               <div>
                   <ImgUpload />
               </div>
           </div> 
        )
    }
}

export default FormSubmit;