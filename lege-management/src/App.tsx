import {NavLink, useRoutes} from "react-router-dom";
import routes from '@/router'
import React from "react";

function App() {
    let elements = useRoutes(routes)
    return (
        <div className="App">
            {elements}
        </div>
    )
}

export default App
