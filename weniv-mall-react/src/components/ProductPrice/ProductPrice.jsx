import './productPrice.css'
export function ProductPrice({ price }) {
  return <strong className="price m-price">{price}<span>원</span></strong>
}
