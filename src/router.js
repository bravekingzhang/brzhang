import BookMark from "./pages/BookMark";
import ChangTou from "./pages/ChangTou";
import Index from "./pages/Index";

const routes = [
    { path: '/',name:'index', component: Index },
    { path: '/index',name:'index', component: Index },
    { path: '/bookmark',name:'bookmark', component: BookMark },
    { path: '/changtou',name:'changtou', component: ChangTou }
]

export default routes