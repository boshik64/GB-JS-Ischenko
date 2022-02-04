import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";

import './assets/less/main.less';

const productList = getProductList(20);

renderGoodsList(productList);