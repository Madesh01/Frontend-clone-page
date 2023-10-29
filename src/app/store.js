import{configureStore} from "@reduxjs/toolkit";

import userReducer from "../Pages/slices/user";

const store=configureStore({
    reducer:{
        userInfo:userReducer,
    },
});
export default store;