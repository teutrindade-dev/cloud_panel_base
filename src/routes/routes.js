import Dashboard from "../pages/Dashboard/Dashboard";
import Websites from "../pages/Websites";
import ClickToOn from "../pages/ClickToOn";
import Databases from "../pages/Databases";
import ClickToLaunch from "../pages/ClickToLaunch";
import TrainModels from "../pages/TrainModels";
import Terminal from "../pages/Terminal";
import Paths from "../pages/Paths";
import Monitoring from "../pages/Monitoring";

const routes = [
    { path: "/", component: Dashboard },
    { path: "/websites", component: Websites },
    { path: "/click-to-on", component: ClickToOn },
    { path: "/databases", component: Databases },
    { path: "/click-to-launch", component: ClickToLaunch },
    { path: "/train-models", component: TrainModels },
    { path: "/terminal", component: Terminal },
    { path: "/paths", component: Paths },
    { path: "/monitoring", component: Monitoring },
];

export default routes;
