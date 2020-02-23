import React from "react"
import { Grid, Divider, Container, Header, List, Icon} from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';
import Pdf from '../images/96efa12a38c0bbe5a96ac5089ed72de9.png'
import '../styles/Contactpage.css'

function Contactpage(props) {
    return (
        <div className='page'>
            <div className="Volunteer Form">
            <Header as='h2' textAlign='center'>Volunteer Opportunities at St. Francis House</Header>
            <Container textAlign='center'>
                <p>Since we rely on the assistance of our volunteers, we request that all participants arrive as scheduled.</p>
                <p>Volunteers who require staff verification for their hours (AARP, community service for food stamps/welfare, court ordered
                    community service, students hours, etc.) must be on the schedule made by the Volunteer Coordinator. Goodwill volunteers can be given hours as needed, if available.
                </p>
                <b>
                    <p>
                        We ask that volunteers be scheduled in 2-hour or 4-hour blocks, but exceptions can be made depending on availability and/or hours required.
                    </p>
                </b>
            </Container>
            <List>
                <List.Item>
                    <List.Icon name='arrow circle right'/>
                    <List.Content>
                        
                            <u>
                                Individuals:
                            </u>
                        
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='cog'/>
                    <List.Content>
                        <b>
                            Guest Services Assistant
                        </b>
                    </List.Content>
                </List.Item>
                <List.List>
                    <List.Content>Duties: Provide/prepare and serve enough food (and drinks) to feed the shelter's 35-40 residents.</List.Content>
                    <List.Content>Hours: between <b>8.00a - 6.00p</b> every day, depending on when shifts are available.</List.Content>
                </List.List>
                <List.Item>
                    <List.Icon name='cog'/>
                    <List.Content>
                        <b>
                            Kitchen Assistant
                        </b>
                    </List.Content>
                </List.Item>
                <List.List>
                    <List.Content>Duties: Help prepare and cook breakfast/lunch for day clients, clean dining room, clean kitchen area, wash dishes and plates, collect donations, organize pantry, check for out of date products, etc.</List.Content>
                    <List.Content>Hours: between <b>8.00a - 6.00p</b> every day, depending on when shifts are available.</List.Content>
                </List.List>
                
            </List>
            <List>
                <List.Item>
                    <List.Icon name='arrow circle right'/>
                    <List.Content>
                        
                            <u>
                                Groups:
                            </u>
                        
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='cog'/>
                    <List.Content>
                        <b>
                            Evening Meals
                        </b>
                    </List.Content>
                </List.Item>
                <List.List>
                    <List.Content>Duties: Provide/prepare and serve enough food (and drinks) to feed the shelter's 35 - 40 residents.</List.Content>
                    <List.Content>Hours: Dinner is served at <b>6.00p</b> daily.</List.Content>
                </List.List>
                <List>
                    <List.Content>If you are providing an already cook and prepared meal, we ask that you arrive around <b>5.30p</b> to set up and start serving.</List.Content>
                </List>
                <List>
                    <List.Content>If you would like to use the kitchen at St. Francis House to cook, you must bring the food you will be providing. We will offer anything needed to cook the meal, as well as: plates, cups, and utensils. We ask that you arrive around <b>4.00p - 4.30p</b>, depending on how much time you need to cook.</List.Content>
                </List>
                <List.Item>
                    <List.Icon name='cog'/>
                    <List.Content>
                        <b>
                            Brunch Meals
                        </b>
                    </List.Content>
                </List.Item>
                <List.List>
                    <List.Content>Duties: Help prepare and cook breakfast/lunch for day clients, clean dining room, clean kitchen area, wash dishes and plates, collect donations, organize pantry, check for out of date products, deep cleaning, etc.</List.Content>
                    <List.Content>Hours: between <b>8.00a - 4.00p</b> daily.</List.Content>
                </List.List>
                <List.Item>
                    <List.Icon name='cog'/>
                    <List.Content>
                        <b>
                            Donation Room Organization
                        </b>
                    </List.Content>
                </List.Item>
                <List.List>
                    <List.Content>Duties: Help organize, sort, and clean up donation rooms, closets, pantries, collect new donations, etc.</List.Content>
                    <List.Content>Hours: between <b>8.00a - 6.00p</b> daily.</List.Content>
                </List.List>
                <List.Item>
                    <List.Icon name='cog'/>
                    <List.Content>
                        <b>
                            Facility Work Project
                        </b>
                    </List.Content>
                </List.Item>
                <List.List>
                    <List.Content>Duties: Help provide lawn/yard work to either St. Francis House or Arbor House. Executive Director may request specific projects to be completed, such as painting, general maintenance, etc. as needed.</List.Content>
                    <List.Content>Hours: between <b>8.00a - 2.00p</b>, available any time.</List.Content>
                </List.List>
                <List.Item>
                    <List.Icon name='cog'/>
                    <List.Content>
                        <b>
                            Donation Drives / Fundraisers
                        </b>
                    </List.Content>
                </List.Item>
                <List.List>
                    <List.Content>Organize an event on the behalf of St. Francis House for: supplies, donations, funds, etc.</List.Content>
                    <List.Content>Items we are always in need of: bleach, floor cleaner, toilet paper, paper towels, trash bags, towels, washcloths, sheets, blankets, personal hygiene items, men's and women's casual clothing, etc.</List.Content>
                </List.List>
            </List>
            <a href = {Pdf} target = "_blank">Download Application Form</a>
            </div>
            <Divider horizontal>Contact Us</Divider>
            <Container textAlign='center'>
                <b>St. Francis House, Inc</b>
                <p>Address: 413 S. Main Street, Gainesville, FL 32601</p>
                <p>Phone Number: 352-378-9079</p>
            </Container>
            <br></br>
            <Container textAlign='center'>
                <b>Arbor House</b>
                <p>Address: 2618 NW 6th Street, Gainesville, FL 32609</p>
                <p>Phone Number: 352-505-3311</p>
            </Container>
            <br></br>
            <Container textAlign='center'>
                <b>Volunteer & Communications Manager:</b>
                <p> Send Inquiries to Katelyn Drummet</p>
                <p>Phone Number: 352-378-9079 ext. 317</p>
                <p>Email: <u>sfhcoor@stfrancis.cfcoxmail.com</u></p>
            </Container>
        </div>
    );
}

export default Contactpage;
