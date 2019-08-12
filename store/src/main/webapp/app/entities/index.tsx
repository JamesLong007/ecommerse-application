import React from 'react';
import { Switch } from 'react-router-dom';

// tslint:disable-next-line:no-unused-variable
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Customer from './ecommerseApplication/customer';
import Product from './ecommerseApplication/product';
import ProductCategory from './ecommerseApplication/product-category';
import ProductOrder from './ecommerseApplication/product-order';
import OrderItem from './ecommerseApplication/order-item';
import Invoice from './ecommerseApplication/invoice';
import Shipment from './ecommerseApplication/shipment';
import Notification from './ecommerseApplication/notification';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}/customer`} component={Customer} />
      <ErrorBoundaryRoute path={`${match.url}/product`} component={Product} />
      <ErrorBoundaryRoute path={`${match.url}/product-category`} component={ProductCategory} />
      <ErrorBoundaryRoute path={`${match.url}/product-order`} component={ProductOrder} />
      <ErrorBoundaryRoute path={`${match.url}/order-item`} component={OrderItem} />
      <ErrorBoundaryRoute path={`${match.url}/invoice`} component={Invoice} />
      <ErrorBoundaryRoute path={`${match.url}/shipment`} component={Shipment} />
      <ErrorBoundaryRoute path={`${match.url}/notification`} component={Notification} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
