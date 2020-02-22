import React from 'react'
import '../styles/footer.css'
import {Segment, Button, Icon} from 'semantic-ui-react'

const Footer = (props) => {

    return (
        <div className='footer'>
            <Segment className="center aligned">Copyright information</Segment>
            <Button textAlign='right aligned' color='facebook' href='https://www.facebook.com/stfrancisgainesville/'>
                <Icon name='facebook'/> Facebook
            </Button>
        </div>
    );

}

export default Footer;