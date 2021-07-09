import ContactForm from './ContactForm'
/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import styled from 'styled-components'

const Wrap = styled.div`
    background-color: #222;
     max-width: 1920px;
`
const StyledContainer = styled.div`
    background-color: #222;
    font-family: 'Barrow';
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
     @media only screen and (min-width: 700px){
         flex-direction: row;
         max-width: 1640px;
         margin: 0 auto;
         justify-content: space-between;
         
     }
`
export const StyledTitle = styled.h2`
    color:white;
    font-weight: 900;
    font-size:3rem;
    line-height: 1;
    max-width: 200px;
    text-transform: uppercase;
      @media only screen and (min-width: 700px){
          max-width:300px;
         
      }
`

const Contact = () => {
    const { theme } = useThemeUI();
    return (
        <Wrap>
            <StyledContainer>                
                <div>
                    <StyledTitle>
                    LET’S BUILD YOUR CULTURE
                    </StyledTitle>             
                    <p style={{maxWidth:'675px',paddingRight:'1rem'}}  sx={theme.styles.whiteText}>Veniam incididunt magna sunt esse. Qui commodo anim ad incididunt ipsum quis consequat velit est aliqua in. Sunt culpa minim nostrud culpa ipsum duis aute ad labore incididunt fugiat. Qui eiusmod quis enim ullamco nulla aliquip tempor dolore veniam non anim deserunt amet. Sunt excepteur aliqua commodo aliqua ad esse fugiat.</p>
                </div>               
                <ContactForm/>
            </StyledContainer>
        </Wrap>
    )
}

export default Contact
