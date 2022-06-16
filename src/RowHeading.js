import React, { useState } from 'react'
import "./RowHeading.css"
import { rowData } from './rowdata2';
import RowData1 from './Rows/RowData1';
import RowData2 from './Rows/RowData2';


export default function RowHeading() {
const [isClicked, setisClicked] = useState(false)
const [rederRowData,setRenderRowData]=useState(rowData)
const [ind,setInd]=useState(0)

const RowData='RowData'
let rowNum

function handleClick(e) {
        setisClicked(!isClicked)
        //dsasdsd
}




return (
<div className='row-data'>
        
<div class="row">       
        <div class="image-container">
        <img alt='mlogo' id="morrison-supermarket"
        src="https://1000logos.net/wp-content/uploads/2018/09/Morrisons-Logo-768x483.jpg"/>
        </div>



        <div class="image-container">
        <img alt='tlogo' id="tcs-logo" 
        src="https://www.quintessencelabs.com/wp-content/uploads/2021/07/TCS_Logo_CROPPED.jpg"/>
        </div>
</div> 

        {rederRowData.map((item,index)=>{
                return(
                        <div key={item.index}>
                                <p>{item.name}</p>
                                <button onClick={handleClick} id={item.index}>{item.data}</button>
                                {isClicked && <RowData1/>}
                        </div>
                )
        })}
        
</div>
)
}
