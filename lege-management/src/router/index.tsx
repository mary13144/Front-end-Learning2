import {Navigate} from "react-router-dom";
import React, {lazy} from "react";
import Page301 from "@/views/Page301";
import Page302 from "@/views/Page302";
import Page303 from "@/views/Page303";
import Page401 from "@/views/Page401";
import Page402 from "@/views/Page402";
import Page5 from "@/views/Page5";
const Page1 = lazy(()=>import("@/views/Page1"));
const Page2 = lazy(()=>import("@/views/Page2"));
const Home =  lazy(()=>import("@/views/Home"));


const withlazyloadingComponent = (element:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
        {element}
    </React.Suspense>
)

const routes = [
    {
        path:'/',
        element:<Navigate to={'/page1'}/>
    },
    {
        path: '/',
        element: withlazyloadingComponent(<Home/>),
        children:[
            {
                path:'page1',
                element: withlazyloadingComponent(<Page1/>)
            },
            {
                path: 'page2',
                element: withlazyloadingComponent(<Page2/>)
            },
            {
                path: 'page3/page301',
                element: withlazyloadingComponent(<Page301/>)
            },
            {
                path: 'page3/page302',
                element: withlazyloadingComponent(<Page302/>)
            },
            {
                path: 'page3/page303',
                element: withlazyloadingComponent(<Page303/>)
            },
            {
                path: 'page4/page401',
                element: withlazyloadingComponent(<Page401/>)
            },
            {
                path: 'page4/page402',
                element: withlazyloadingComponent(<Page402/>)
            },
            {
                path: 'page5',
                element: withlazyloadingComponent(<Page5/>)
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to={'/page1'}/>
    }

]

export default routes