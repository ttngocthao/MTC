import ContactForm from './ContactForm'
import {Container} from 'semantic-ui-react'
/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: #222;
    font-family: 'Barrow';
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
     @media only screen and (min-width: 700px){
         flex-direction: row;
         max-width: 1200px;
         margin: 0 auto;
         justify-content: space-between;
         padding-left: 4rem;
         padding-right: 4rem;
     }
`


const Contact = () => {
    const { theme } = useThemeUI();
    return (
        <StyledContainer>
                
                <div>
                    <h2 sx={theme.styles.h2,theme.styles.whiteText}>
                    LET’S BUILD YOUR CULTURE
                    </h2>    
            
                    <p style={{maxWidth:'400px'}}  sx={theme.styles.whiteText}>Veniam incididunt magna sunt esse. Qui commodo anim ad incididunt ipsum quis consequat velit est aliqua in. Sunt culpa minim nostrud culpa ipsum duis aute ad labore incididunt fugiat. Qui eiusmod quis enim ullamco nulla aliquip tempor dolore veniam non anim deserunt amet. Sunt excepteur aliqua commodo aliqua ad esse fugiat.</p>
    
                </div>
               
                <ContactForm/>
              
            
            
        </StyledContainer>
    )
}

export default Contact
