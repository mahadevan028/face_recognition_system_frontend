import React from 'react';
import './ImageInput.css';



function ImageInput({onInputChange, onDetect}) {
    return (
        <div>
            <p className='f3'>{'This magic brain will detect faces in your pictures. Give it a try!'}</p>
            <div className='center'>
                <div className=' center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}></input>
                    <button className="w-30 grow f4 link ph3 pv2 dib bg-light-blue"
                            onClick={onDetect}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageInput;