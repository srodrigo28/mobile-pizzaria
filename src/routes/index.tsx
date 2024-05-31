import React from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { ActivityIndicator, View } from "react-native";

function Routes(){
    const isAuthenticated = false;
    const loading = false;

    if(loading){
        return(
            <View style={{ 
                flex: 1, 
                alignContent: 'center',
                justifyContent: 'center', 
                backgroundColor: '#1c1c1c', 
            }}>
                <ActivityIndicator size={30} color="#1D1D" />
            </View>
        )
    }

    return(
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;