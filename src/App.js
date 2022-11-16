import './App.scss';
import React, { useEffect, useState, createRef } from "react";
import { Spinner, IconButton, ComponentsProvider, Header, Tooltip } from '@looker/components';
import { LookerEmbedSDK } from '@looker/embed-sdk';
import {ExpandOutline} from '@styled-icons/evaicons-outline/ExpandOutline'

LookerEmbedSDK.init(process.env.LOOKER_HOST, '/api/sso_auth')
const DASHBOARD_ID = 4 // CHANGEME

const LoadingElement = ({size=40}) => {
    return (
    <div className='maxSize'>
        <Spinner size={size}/>
    </div>
    )
}

const ExpandButton = ({fullScreen, setFullScreen}) => {
    return (
        <Tooltip content={fullScreen ? 'Minimise' : 'Expand'}>
            <IconButton
                size='medium'
                className='expandIcon'
                icon={<ExpandOutline/>}
                onClick={() => setFullScreen(!fullScreen)}/>
        </Tooltip>
    )
}


const App = () => {
    const [fullScreen, setFullScreen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [dashboard, setDashboard] = useState()
    const dashRef = createRef()
    const dashboardTitle = 'Looker Dashboard'
    
    useEffect(() => {
        console.log("running useEffect")
        setIsLoading(true)
        LookerEmbedSDK.createDashboardWithId(DASHBOARD_ID)
        .appendTo(dashRef.current)
        .build()
        .connect()
        .then(setupDashboard)
        .catch((error) => {
          console.error('An unexpected error occurred', error)
        })
        setIsLoading(false)
        return () => {
            if (dashRef.current) {
                return dashRef.current.innerHTML = ''
            }
        }
    }, [])

    const setupDashboard = (d) => {
        setDashboard(d)
    }

    return (
        <ComponentsProvider>
            <div className='app'>
                <Header as='h2'>{dashboardTitle}</Header>
                <div className={`dashboard ${fullScreen ? 'fullScreenOverlay' : ''}`}>
                    <ExpandButton fullScreen={fullScreen} setFullScreen={setFullScreen}/>
                    {isLoading 
                    ? <LoadingElement size={40}/>
                    : <div id='dashboard-div' ref={dashRef}></div>
                    }
                </div>
                </div>
      </ComponentsProvider>
    )
}
export default App