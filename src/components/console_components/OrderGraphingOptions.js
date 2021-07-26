import React from 'react'

const OrderGraphingOptions = ({products, handleItemClick, filterProduct}) => {
    // console.log(products)

    const buttonArray = products.map((item) => {

        if (item.productName === filterProduct){
            return (
                <li onClick={handleItemClick} id='selected-filter' name={item.productName} key={item.productName}>{item.productName}</li>
            )
        } else {    
            return (
                <li onClick={handleItemClick} name={item.productName} key={item.productName}>{item.productName}</li>
                )
        }
    }) 

    return (
        <div className='order-graphing-options'>

            <h2 id='order-options-header'>Filter Graph by Product:</h2>

            <ul>
                <li onClick={handleItemClick} name="" key="CLEAR">Clear Filter </li>
                {buttonArray}
            </ul>
        </div>
    )
}

export default OrderGraphingOptions
