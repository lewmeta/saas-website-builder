import Navigation from '@/components/site/navigation/indext'
import React from 'react'

type Props = {}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-full'>
            <Navigation />
            {children}
        </div>
    )
}

export default Layout;