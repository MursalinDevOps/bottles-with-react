import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'
import { addToLs, getStoredCart } from "../../Utils/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            // console.log(storedCart, bottles)
            const savedCart = [];
            for (const id of storedCart) {
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            // console.log('saved cart', savedCart)
            setCart(savedCart)
        }
    }, [bottles])

    const handleCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        // 
        addToLs(bottle.id)
    }

    return (
        <div>
            <h3>Total Bottles : {bottles.length}</h3>
            <h3>My cart : {cart.length}</h3>
            {
                cart.map(bottle => <img key={bottle.id} style={{width:'100px', marginRight:'10px'}} src={bottle.img}></img>)
            }
            <div className="layout">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleCart={() => handleCart(bottle)}> </Bottle>)
                }
            </div>
        </div>
    )
}

export default Bottles;