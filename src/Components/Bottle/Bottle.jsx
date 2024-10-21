import './bottle.css'
export default function Bottle({ bottle }) {
    const { img, name, seller, price, ratings, ratingsCount, stock } = bottle
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div style={{ textAlign: 'left' }}>
                <h3>Bottle Name: {name}</h3>
                <h4>Seller Name: {seller}</h4>
                <h4>Price:  ${price}</h4>
                <p>Ratings: {ratings} <small>({ratingsCount})</small></p>
                <p>Stock: {stock}</p>
            </div>
        </div>
    )
}
