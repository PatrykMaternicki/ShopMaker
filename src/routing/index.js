import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import MainSiteView from '../views/MainSiteView.vue';
import ProfileView from '../views/ProfileView.vue';
import ShippingCardView from '../views/ShippingCardView.vue';
import MakeOrderView from '../views/MakeOrderView.vue';

const routes = [
  {path: '/', component: MainSiteView},
  {path: '/sign-in', component: RegisterView},
  {path: '/login', component: LoginView},
  {path: '/profile', component: ProfileView},
  {path: '/shipping-card', component: ShippingCardView},
  {path: '/make-order', component: MakeOrderView}

];

export default routes;