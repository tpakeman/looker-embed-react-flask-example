import './App.scss';
import React, { useEffect, useState } from "react";
import { Spinner, IconButton, ComponentsProvider, Header } from '@looker/components';
import { LookerEmbedSDK } from '@looker/embed-sdk';
import {ExpandOutline} from '@styled-icons/evaicons-outline/ExpandOutline'
const DASHBOARD_ID = 4 // CHANGEME

LookerEmbedSDK.init(process.env.LOOKER_HOST, '/api/sso_auth')

const LoadingElement = ({size=40}) => {
    return (
    <div className='maxSize'>
        <Spinner size={size}/>
    </div>
    )
}

const ExpandButton = ({fullScreen, setFullScreen}) => {
    return (
        <div className={`expand-header`}>
            <IconButton
                size='medium'
                className='expandIcon'
                icon={<ExpandOutline />}
                onClick={() => setFullScreen(!fullScreen)}/>
        </div>
    )
}


const App = () => {
    const [fullScreen, setFullScreen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const dashboardTitle = 'Looker Dashboard'

    useEffect(() => {
            setIsLoading(true)
            LookerEmbedSDK.createDashboardWithId(DASHBOARD_ID)
            .appendTo('#dashboard-div')
            .build()
            .connect()
            // .then()
            .catch((error) => {
                console.error('An unexpected error occurred', error)
            })
            setIsLoading(false)
        return () =>  document.querySelector('#dashboard-div').innerHTML = ''
    }, [])

    return (
        <ComponentsProvider>
            <div className='app'>
                <Header as='h2'>{dashboardTitle}</Header>
                <div className={`dashboard ${fullScreen ? 'fullScreenOverlay' : ''}`}>
                    <ExpandButton fullScreen={fullScreen} setFullScreen={setFullScreen}/>
                    {isLoading 
                    ? <LoadingElement size={40}/>
                    : <div id='dashboard-div'></div>
                    }
                </div>
                </div>
      </ComponentsProvider>
    )
}
export default App