import "./ProductCard.css";
import AddToCartButton from "./AddToCartButton/AddToCartButton";

const ProductCard = ({ product, user, isInCart, onAddToCart, onDeleteFromCart }) => {
    const {
        id,
        name,
        description,
        image,
        price,
        stockQuantity
    } = product;

    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h2 className="product-title">{name}</h2>
                <p className="product-description">{description}</p>
            </div>
            <div className="product-actions">
                <p className="product-price">{price} ₽</p>
                <AddToCartButton
                    productId={id}
                    user={user}
                    isInCart={isInCart}
                    onAddToCart={onAddToCart}
                    onDeleteFromCart={onDeleteFromCart}
                />
            </div>
        </div>
    );
};

export default ProductCard;