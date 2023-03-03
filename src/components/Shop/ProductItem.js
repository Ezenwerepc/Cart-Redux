import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux';
import { cartActions } from '../../Store/Cart-slice';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler  = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    })
    );
  }
  const { title, price, description, id } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <span className={classes.price}>${price.toFixed(2)}</span>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick ={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
