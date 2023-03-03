import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, Fragment} from 'react';
import Notification from './components/UI/Notification';
import {sendCartData, fetchCartData} from './Store/Cart-actions';


let isIntitial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector (state => state.ui.cartIsVisible);
  const cart = useSelector(state=>state.cart);
  const notification = useSelector(state=> state.ui.notification);
  
  useEffect(() =>{
    dispatch(fetchCartData())
}, [dispatch]);


  useEffect(() =>{
    
    //const sendCartData = async () => {
      //dispatch(
        //uiActions.showNotification({
          //status: 'pending',
          //title: 'sending...',
          //message: 'sending cart data',
        //})
      //);
      //const response = await fetch(
        //'https://react-http-6b4a6.firebaseio.com/cart.json', {
      //method: 'PUT',
      //body: JSON.stringify(cart),
  //}
  //);
  //if (!response.ok) {
    //throw new Error('Sending cart data failed.');
  //}
  //dispatch(
    //uiActions.showNotification({
      //status: 'success',
      //title: 'success!',
      //message: 'sending cart data successfully!',
    //})
  //);
//};
if (isIntitial) {
  isIntitial = false;
  return;
}
  
//sendCartData().catch((error) =>{
  //dispatch(
    //uiActions.showNotification({
      //status: 'error',
      //title: 'error!',
      //message: 'sending cart data failed!',
    //})
  //);
//});
if(cart.changed){
  dispatch(sendCartData(cart));
}
}, [cart,dispatch]);

  return (
    <Fragment>
      {notification && (<Notification
      status={notification.status}
      title={notification.title}
      message={notification.message} />)}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
