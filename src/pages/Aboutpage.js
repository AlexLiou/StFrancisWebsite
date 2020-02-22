import React from "react";
import { Container, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import "../styles/Aboutpage.css";

const AboutPage = () => (
  <div className="page">

    <Container textAlign='center'><b>About</b></Container>
      <Divider />
      <Container textAlign='center'> <b> Mission Statement </b> </Container>
      <p>
      Our mission is to empower families with children to transition from homelessness to self-sufficiency by providing case management,
      housing, food, training and educational resources in a secure environment.
      </p>
      <Container textAlign='center'> <b> What is St. Francis House? </b> </Container>
      <br></br>
      <p>
      St. Francis House was established in 1980 by Father baker. His goal was to provide the necessities to help the impoverished and hungry in his community. In 2019 St. Francis House provided
      shelter to 403 people where 229 were adults and 174 were kids (150 being under the age of 12 years old).
      </p>
      <Container textAlign = 'center'> <b> The Structure of St.Francis House: </b> </Container>
      <br></br>
      <p>
      The current Board has 10 members, some of whom have been on the board for 15+ years.
      <br></br>
      St. Francis House currently employs 13 people: <br></br>
      <ul>
        <li>Executive Director - Lauri Schiffbauer</li>
        <li>Director of Operations & Human Resources - Kathie Dupree</li>
        <li>Program & Volunteer Coordinator - Katelyn Drummet</li>
        <li>Director of Client Services & Case Management - Tavia Sumpter </li>
        <li> Case Manager - Ashley Kopitsky </li>
        <li> Food Services Manager - Reece Carter </li>
        <li> Food Services - Gina Acquafredda </li>
        <li> Maintenance - Barry Vaughn </li>
        <li> Client Services - Elisha Bryant, Lillian Danzy, Kendroia Douglas, Marlene Eddy, Regina Livingston </li>
      </ul>
      </p>
      <Container textAlign = 'center'> <b> What Does St. Francis House Provide? </b> </Container>
      <br></br>
      <p>
      St. Francis House houses 35-40 shelter guests, with preference given to families where guests typically stay for an average of 2-4 weeks.
      St. Francis House has two case managers on site, who also oversee our two other properties. Guests are required to meet regularly with the
      case manager and set up individualized case plans to help refer guests to local community resources that best meet their immediate needs.
      </p>
      <p>
      For meal services, breakfast is served to shelter residents from 6:00a - 7:00a, lunch is served from 9:00 a - 12:00p every day (for all who have police clearance), and
      dinner is provided by service groups or community organizations (for shelter residents only) starting at 6:00p every night.
      </p>
      <Container textAlign = 'center'> <b> St. Francis House, Inc. Properties: </b> </Container>
      <br></br>
      <p>
      <b> St. Francis House: </b>

      St. Francis House offers emergency shelter to about 35-40 people per night, with priority given to families with children.
      While residing at the shelter, guests receive three meals a day, are assigned and individualized case plan to follow, have access to our laundry room, can use the client phone, etc.
      We have 8 family rooms and 1 room designated for respite patients. House guests are required to attend a weekly group meeting with case managers and all residents on Monday nights.
      </p>
      <p>
      <b> Arbor House: </b>
      Arbor House was acquired by St. Francis House in 2013. Arbor House provides affordable transitional housing in a communal setting to working mothers with children. Each family
      works with a case manager to design a plan to move to self-sufficiency. Low-income families who cannot afford market rent benefit from this set-up since they work as a community to achieve similar goals.
      Since 2013, 250 women and children have stayed at Arbor house. 47% were children under the age of 12.
      </p>
      <p>
      <b> Sunrise: </b>
      The Sunrise Residence Inn is a permanent housing program that assists homeless working individuals whose goal is to become self-sufficient. Since affordable housing is difficult to find in Gainesville, the program
      at times also invites persons who receive disability income to participate. Some residents use the program for a year or two,
      then move on to private housing. Others, who have fixed incomes, have lived at Sunrise since it
      was established by St. Francis in 2000. Residents work with a case manager based on their personalized case plans.

      </p>




  </div>
)

export default AboutPage

