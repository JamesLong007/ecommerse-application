import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name={translate('global.menu.entities.main')} id="entity-menu">
    <MenuItem icon="asterisk" to="/entity/customer">
      <Translate contentKey="global.menu.entities.ecommerseApplicationCustomer" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/product">
      <Translate contentKey="global.menu.entities.ecommerseApplicationProduct" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/product-category">
      <Translate contentKey="global.menu.entities.ecommerseApplicationProductCategory" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/product-order">
      <Translate contentKey="global.menu.entities.ecommerseApplicationProductOrder" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/order-item">
      <Translate contentKey="global.menu.entities.ecommerseApplicationOrderItem" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/invoice">
      <Translate contentKey="global.menu.entities.ecommerseApplicationInvoice" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/shipment">
      <Translate contentKey="global.menu.entities.ecommerseApplicationShipment" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity/notification">
      <Translate contentKey="global.menu.entities.ecommerseApplicationNotification" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
