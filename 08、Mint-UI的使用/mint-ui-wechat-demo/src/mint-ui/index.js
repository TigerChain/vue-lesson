/**
 * @auther TigerChain
 * 单独按需引入 mint-ui 想要使用的组件
 */
import Vue from 'vue'

import {
  TabContainer,
  TabContainerItem ,
  Tabbar,TabItem,Cell,Button,
  IndexList, IndexSection
} from 'mint-ui'

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
