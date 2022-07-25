import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline text-secondary">
          <span className="fs-5">{name}</span>
          <span className="text-primary font-weight-bold ms-2">
            {formatCurrency(price)}
          </span>
        </Card.Title>
        <div className="mt-3">
          {quantity === 0 ? (
            <Button
              variant="danger"
              className="w-100 "
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  variant="secondary"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div className="fs-5 text-dark">{quantity} in cart</div>
                <Button variant="info" onClick={() => increaseCartQuantity(id)}>
                  +
                </Button>
              </div>
              <Button variant="warning" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
