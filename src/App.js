import './App.css';
import React from "react";
import { ComponentsProvider } from '@looker/components';
import { Spinner } from '@looker/components';


const LoadingElement = ({size}) => {
    return (
        <Spinner size={size}></Spinner>
    )
}

const App = () => {
    return (
        <ComponentsProvider>
            <div>
                <div>
                    Hi                
                </div>
            </div>
      </ComponentsProvider>
    )
}
export default App