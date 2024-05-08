import { useState } from 'react'

export default function Item(props) {
  // const [item_qty, setQty] = useState(props.qty)

  function increaseQty(event) {
    event.preventDefault()
    // setQty(item_qty + 1)
    props.onItemChanged({ name: props.name, qty: props.qty + 1, price: props.price });
  }

  function reduceQty(event) {
    event.preventDefault()
    if (props.qty > 1) {
      // setQty(item_qty - 1)
      props.onItemChanged({name: props.name, qty: props.qty - 1, price: props.price }); 
    }
  }
    
  const amount = props.price * props.qty
  
  return (
    <div className="flex space-between mt-4">
      <div className="flex items-center space-between w-2/3">
        <div className="flex items-center">
          <button className="bg-red-800 text-white p-2 rounded mr-2" onClick={reduceQty}>-</button>
          <p className="mx-2">{props.qty}</p>
          <button className="bg-green-800 text-white p-2 rounded mx-2" onClick={increaseQty}>+</button>
        </div>
        <p className="ml-4">{props.name}</p>
      </div>

      <p className="item_amount">${amount.toFixed(2)}</p>
    </div>
  )
}