import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Formik, Field, Form ,ErrorMessage} from 'formik';
import {Form as SMTForm} from 'semantic-ui-react'
import styled from 'styled-components';

export const TextField = ({field,label,placeholder,unit,multiLines}) => {
    return (
        <SMTForm.Field>
            <label htmlFor={label} hidden={true}>{label}</label>
            <Field
                placeholder={placeholder}
                as={multiLines ? 'textarea': 'input'}
                {...field}
            />{unit ? unit : null}
            <div style={{ color:'red' }}>
                <ErrorMessage name={field.name}/> 
            </div>                       
        </SMTForm.Field>
    );
};

const FormWrap =styled.div`
    background-color: #222;
    min-width: 300px;
    
    width:100%;
    padding: 10px 0;
    @media only screen and (min-width: 1024px){       
        max-width: 450px;
    }
    @media only screen and (min-width: 1200px){
        min-width: 750px;
        /* width: 100%;
        max-width: 1000px; */
     }
`
const AllInputsContainer = styled.div`
    width: 100%;
    @media only screen and (min-width: 1024px){
        display: flex;
        flex-direction:row;
    }
`

const LeftInputsContainer = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    @media only screen and (min-width: 1024px){
        margin-right: 1rem;
       
    }
`
const RightInputsContainer = styled.div`
    width: 100%;
    text-align: right;
`
const SubmitButton = styled.button`
    text-transform: uppercase;
    border:2px solid #f43908;
    color: white;
    padding:.25rem .75rem;    
    border-radius: 5px;
    background-color: transparent;
    font-size: 1.25rem;
    width: 100%;
    transition: .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    @media only screen and (min-width: 1024px){
       max-width: 120px ;
      
       
    }
    &:hover{
        background-color:#f43908;
        color:#222;
        font-weight:900;
        letter-spacing: .1rem;
    }
`


const ContactForm = () => {
    const validate=(values)=>{
        const requiredError = "Field is required";
   
        const errors= {};
       if(!values.firstName){
         errors.firstName =requiredError;
       }

       if(!values.lastName){
         errors.lastName =requiredError;
       }
       
       if(!values.email){
         errors.email =requiredError;
       }

       if(!values.phone){
         errors.phone =requiredError;
       }

       if(!values.subject){
         errors.subject =requiredError;
       }

       if(!values.message){
         errors.message =requiredError;
       }
      
        return errors;
    };
    return (
        <FormWrap>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone:'',
                    subject:'',
                    message:''
                }}
                validate={(values)=>validate(values)}
                onSubmit={async (values) => {
                    const mailSendUrl = 'https://mightycultured.co.uk/mail_form.php'
                    
                    const res = await fetch(mailSendUrl,{
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        mode: 'no-cors', // no-cors, *cors, same-origin
                        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                        // credentials: 'same-origin', // include, *same-origin, omit
                        headers: {
                        // 'Content-Type': 'application/json'
                        'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        // redirect: 'follow', // manual, *follow, error
                        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        body: new URLSearchParams(values) // body data type must match "Content-Type" header
                    })
                    // await new Promise((r) => setTimeout(r, 500));
                    // alert(JSON.stringify(values, null, 2));
                    // console.log(values)
                    console.log(res);
                    // return res.json();
                }}
                >
         {({isValid,dirty})=> {
                return(
            <Form className="form ui">
                <AllInputsContainer>
                    <LeftInputsContainer>
                        <Field id="firstName" name="firstName" placeholder="First Name" component={TextField} />
                                        
                        <Field id="lastName" name="lastName" placeholder="Last Name" component={TextField}/>
                                
                        <Field
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        type="email"
                        component={TextField}
                        />
                                
                        <Field       
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        component={TextField}                
                        />
                                            
                        <Field id="subject" name="subject" placeholder="Subject" component={TextField}/>
                    </LeftInputsContainer>
           
                    <RightInputsContainer>
                        <Field id="message" name="message" placeholder="Message" as='textarea' component={TextField} multiLines={true}/>
                        <SubmitButton disabled={!dirty || !isValid} type="submit">Submit</SubmitButton>
                    </RightInputsContainer>    
                
                </AllInputsContainer>   
                </Form>
                
                )}}
     
    </Formik>
    
        </FormWrap>
      
    )
}

export default ContactForm
