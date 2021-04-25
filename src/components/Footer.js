import React from 'react'
import { Layout } from 'antd'; 

const {Footer} = Layout;
export default function AppFooter() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            
            <p>All data is provided by covid19india.org, volunteer driven, crowdsourced tracker for Covid19 cases in India.</p>
            <b>Built by Mayur Sonawane.</b></Footer>
    )
}
