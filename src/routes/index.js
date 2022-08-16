import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile'


//!public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];

//!private Routes
const privateRoutes = [

];

export { publicRoutes, privateRoutes };
