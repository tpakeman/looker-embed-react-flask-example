import './App.css';
import React, { useEffect, useState, createRef } from "react";
import { Button, ComponentsProvider, Header } from '@looker/components';
import { Spinner } from '@looker/components';
import { LookerEmbedSDK } from '@looker/embed-sdk';


const LoadingElement = ({size=40}) => <div className='maxSize'><Spinner size={size}/></div>
LookerEmbedSDK.init(process.env.LOOKER_HOST, '/api/sso_auth')

const App = () => {
    const [fullScreen, setFullScreen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [dashboard, setDashboard] = useState()
    const dashRef = createRef()
    const dashboardTitle = 'Looker Dashboard'
    useEffect(() => {
        LookerEmbedSDK.createDashboardWithId(11)
        .appendTo(dashRef)
        .build()
        .connect()
        .then()
        .catch((error: Error) => {
          console.error('An unexpected error occurred', error)
        })
    }, [dashRef])

    return (
        <ComponentsProvider>
            <div className='app'>
                <Header as='h2'>{dashboardTitle}</Header>
                <div className={`dashboard ${fullScreen ? 'fullScreenOverlay' : ''}`}>
                    <Button onClick={() => setFullScreen(!fullScreen)}>
                        Toggle fullscreen
                    </Button>
                    {isLoading 
                    ? <LoadingElement size={40}/>
                    : <></>
                }
                </div>
            </div>
      </ComponentsProvider>
    )
}
export default App