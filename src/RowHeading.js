import React, { useState } from 'react'
import "./RowHeading.css"
// import { rowData } from './rowdata2';
import RowData1 from './Rows/RowData1';
import RowData2 from './Rows/RowData2';
import RowData3 from './Rows/RowData3';
import RowData4 from './Rows/RowData4';

export default function RowHeading() {
const [isClicked, setisClicked] = useState(false)
const [isClicked2, setisClicked2] = useState(false)
const [isClicked3, setisClicked3] = useState(false)
const [isClicked4, setisClicked4] = useState(false)

// const [rederRowData,setRenderRowData]=useState(rowData)
// const [ind,setInd]=useState(0)

// const RowData='RowData'
// let rowNum

function handleClick() {
        setisClicked(!isClicked)
}

function handleClick2() {
        setisClicked2(!isClicked2)
}

function handleClick3() {
        setisClicked3(!isClicked3)
}

function handleClick4() {
        setisClicked4(!isClicked4)
}

return (
<div className='row-data'>
        
<div className="row">       
        <div className="image-container">
        <img alt='mlogo' id="morrison-supermarket"
        src="https://1000logos.net/wp-content/uploads/2018/09/Morrisons-Logo-768x483.jpg"/>
        </div>

        


        <div className="image-container">
        <img alt='tlogo' id="tcs-logo" 
        src="https://indiancompanies.in/wp-content/uploads/2020/05/TCS-Logo-Tata-consultancy-service.png"/>
        </div>
</div> 

<h1 className='title'> Range Recon Report</h1>

<h2 className='row-heading'>
Present in Galleria but missing in Service:<button  className='data' onClick={handleClick}
> 214 </button>
</h2>
{isClicked && < RowData1/>}

<h2 className='row-heading'>
Present in Galleria and Service but mismatch in columns: <button  className='data'  onClick={handleClick2}
> 0 </button>
</h2>
{isClicked2 && <RowData2/>}

<h2 className='row-heading'>
Present in Galleria but missing in RMS: <button  className='data' onClick={handleClick3}
> 2 </button>
</h2>
{isClicked3 && <RowData3/>}

<h2 className='row-heading'>
Present in Galleria and RMS but mismatch in columns: <button  className='data' onClick={handleClick4}
> 270 </button>
</h2>
{isClicked4 && <RowData4/>}

<h2 className='row-heading'>
Present in Galleria and Service but Mismatch in Number of Records:     <button  className='data'
> 51 </button>
</h2>

<h2 className='row-heading'>
Present in Service but missing in RMS: <button  className='data'
> 8 </button>
</h2>

<h2 className='row-heading'>
Present in Service and RMS but mismatch in columns: <button  className='data'
> 837 </button>
</h2>

</div>
)
}

