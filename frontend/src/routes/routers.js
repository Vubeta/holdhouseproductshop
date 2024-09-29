import routes from "./routes";
import Home from "../components/Home";
import Introduce from "../components/Introduce";
import Product from "../components/Product";
import Contact from "../components/Contact";
import Promotion from "../components/Promotion";


const publicRoutes = [

    {path: routes.home, component: Home},

    {path: routes.introduce, component: Introduce},

    {path: routes.product, component: Product},

    {path: routes.promotion, component: Promotion},

    {path: routes.contact, component: Contact}

]

const privateRoutes = [];

export {publicRoutes, privateRoutes};