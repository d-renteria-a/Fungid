import React, {Component} from 'react';
import ImgUpload from './ImgUpload'

class FormSubmit extends Component {
    render() {
        return (
           <div>
               <h3>SUBMIT A NEW FUNGUS</h3>
               <label>Location:</label>
                <div className="input-group mb-3">
                    {/* <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3"></span>
                    </div> */}
                    <input type="text" className="form-control" id="location" placeholder="GPS coordinates or nearest address" aria-describedby="basic-addon3">
                    </input>
                </div>
                <label>Date Found:</label>
                <div className="input-group mb-3">
                    {/* <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3"></span>
                    </div> */}
                    <input type="text" className="form-control" id="date-found" placeholder="mm/dd/yyyy" aria-describedby="basic-addon3">
                    </input>
                </div>
               <div>
                   <ImgUpload />
               </div>
           </div> 
        )
    }
}

export default FormSubmit;