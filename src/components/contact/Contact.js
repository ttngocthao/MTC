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
    padding: 2rem;
    display: flex;
    flex-direction: column;
     @media only screen and (min-width: 700px){
         flex-direction: row;
         /* max-width: 1640px; */
         padding:2rem 7.3%;
         margin: 0 auto;
         justify-content: space-between;
         
     }
`
export const StyledTitle = styled.h2`
    color:white;
    font-weight: 900;
    font-size: 3rem;
    line-height: 1;
    max-width: 200px;
    text-transform: uppercase;
      @media only screen and (min-width: 700px){
          max-width:700px;
         font-size: 4.3rem;
      }
`

const Contact = () => {
    const { theme } = useThemeUI();
    return (
        <Wrap>
            <StyledContainer>                
                <div style={{paddingRight:'2%'}}>
                    <StyledTitle>
                    NOW IS THE TIME TO
                    BUILD SOMETHING GREAT
                    </StyledTitle>             
                    <div style={{maxWidth:'675px',paddingRight:'1rem'}}  sx={theme.styles.whiteText}>
                        <p>We work with businesses of all shapes and sizes and would love to hear from you regarding your next design project.
                        </p>
                        <p>Our team of experienced creatives are ready and waiting to help you through the process. If you have 2 seconds to fill out the form to the right, you’re already more awesome than we suspected.</p>
                    </div>

                </div>               
                <ContactForm/>
            </StyledContainer>
        </Wrap>
    )
}

export default Contact
