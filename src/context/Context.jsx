import React from 'react'
import { useState, useContext } from 'react';
import {data} from "../data/data.js";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [items, setItems] = useState(data);
    const [cart, setCart] = useState([]);
    const [selectedOption, setselectedOption] = useState("1");
    const btnList = [];
    data.forEach(() => btnList.push("Add To Cart"));

    return <AppContext.Provider value = {{user, setUser, password, setPassword, items, setItems, cart, setCart, selectedOption, setselectedOption}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};