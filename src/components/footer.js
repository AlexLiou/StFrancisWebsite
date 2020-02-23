import React from 'react'
import '../styles/footer.css'
import {Segment, Button, Icon} from 'semantic-ui-react'

const Footer = (props) => {

    return (
        <div className='footer'>
            <Segment className="center aligned">
                <p>Copyright information</p>
            <Button textAlign='right aligned' color='facebook' href='https://www.facebook.com/stfrancisgainesville/'>
                <Icon name='facebook'/> Facebook
            </Button>
            </Segment>
        </div>
    );

}

export default Footer;