import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit} ) =>{
	return(
		<div>
			<p className='f3' >This Magic Brain will detect faces in your Pictures.</p>
			{/*you can put the class name like below we have put form so that it can be used for more styling in css file*/}
			<div className='form pa3 w-50 center shadow-5'>
				<input className='w-60 pa2 f4' placeholder='Enter Image or URL here' type='tex' onChange={onInputChange}/>
				<button className='w-20 white pointer grow link f3 br3 ph3 pv2 mb2 dib bg-purple'
						onClick={onButtonSubmit}>Detect
				</button>
			</div>
 		</div>
	);
}

export default ImageLinkForm;