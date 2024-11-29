import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "screens/landing_page";
import {
BikeTiles
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                                                <Route path="/rgegerg/html" element={<LandingPage {...props} title={'LandingPage'} nolistbar={true} />} />
            
                <Route path="/products1/tiles" element={<BikeTiles {...props} title={'Tiles'} />} />
        </Routes>
    )

};

export default Component;
