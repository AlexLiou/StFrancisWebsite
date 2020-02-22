import React from 'react'
import '../css/StaffPage.css'
import SiteHeader from '../components/Header'
import Footer from '../components/Footer/footer'
import {Container, Header, Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const StaffPage = (props) => {

    return (
        <div>

            <SiteHeader/>

            <div className='content'>
            <Header 
            className='ui center aligned title' size='huge' as='h1'>Our Staff</Header>
            
            <Card.Group centered itemsPerRow={3}>
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Lauri Schiffbauer
                    </Card.Header>
                    <Card.Meta>
                        Executive Director
                    </Card.Meta>
                </Card.Content>

            </Card> 
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Kathie Dupree
                    </Card.Header>
                    <Card.Meta>
                        Director of Operations & Human Resources
                    </Card.Meta>
                </Card.Content>

            </Card>
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Katelyn Drummet
                    </Card.Header>
                    <Card.Meta>
                        Program & Volunteer Coordinator
                    </Card.Meta>
                </Card.Content>

            </Card>   
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Tavia Sumpter
                    </Card.Header>
                    <Card.Meta>
                        Director of Client Services & Case Management
                    </Card.Meta>
                </Card.Content>

            </Card>   
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Ashley Kopitsky
                    </Card.Header>
                    <Card.Meta>
                        Case Manager
                    </Card.Meta>
                </Card.Content>

            </Card>   
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Elisha Bryant
                    </Card.Header>
                    <Card.Meta>
                        Client Services
                    </Card.Meta>
                </Card.Content>

            </Card>   
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Lillian Danzy
                    </Card.Header>
                    <Card.Meta>
                    Client Services
                    </Card.Meta>
                </Card.Content>

            </Card>   
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Kendroia Douglas
                    </Card.Header>
                    <Card.Meta>
                    Client Services
                    </Card.Meta>
                </Card.Content>

            </Card>   
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Marlene Eddy
                    </Card.Header>
                    <Card.Meta>
                    Client Services
                    </Card.Meta>
                </Card.Content>

            </Card>   
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Regina Livingston
                    </Card.Header>
                    <Card.Meta>
                    Client Services
                    </Card.Meta>
                </Card.Content>

            </Card>   
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Reece Carter
                    </Card.Header>
                    <Card.Meta>
                    Food Services Manager
                    </Card.Meta>
                </Card.Content>

            </Card>   
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Gina Acquafredda
                    </Card.Header>
                    <Card.Meta>
                    Food Services
                    </Card.Meta>
                </Card.Content>

            </Card>   
            <Card>
                
                <Card.Content>
                    <Card.Header>
                        Barry Vaughn
                    </Card.Header>
                    <Card.Meta>
                    Maintenance
                    </Card.Meta>
                </Card.Content>

            </Card>   
            </Card.Group>        


            {/*
            <div className='content'>
                <div className='title'>
                    <h1 className='ui header'>About our Staff</h1>
                </div>

            </div>
            */}

            </div>

            <Footer/>
        </div>
    );

}

export default StaffPage;