import Area from "../pages/Charts/Area";
import Bar from "../pages/Charts/Bar";
import Line from "../pages/Charts/Line";
import Pie from "../pages/Charts/Pie";
import Customer from "../pages/Customer";
import Ecommerce from "../pages/Ecommerce";
import Employee from "../pages/Employee";
import Home from "../pages/Home";
import Orders from "../pages/Orders";

export const routes = [
    /* Dashboard */
    {
        path: "/",
        component: <Home/>
    },
    {
        path: "/ecommerce",
        component: <Ecommerce/>
    },

    /* Pages */
    {
        path: "/orders",
        component: <Orders/>
    },
    {
        path: "/employees",
        component: <Employee/>
    },
    {
        path: "/customers",
        component: <Customer/>
    },

    /* Charts */
    {
        path: "/line",
        component: <Line/>
    },
    {
        path: "/area",
        component: <Area/>
    },
    {
        path: "/bar",
        component: <Bar/>
    },
    {
        path: "/pie",
        component: <Pie/>
    }
]