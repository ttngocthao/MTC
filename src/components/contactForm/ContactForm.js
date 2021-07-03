import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Formik, Field, Form ,ErrorMessage} from 'formik';
import {Button,Form as SMTForm} from 'semantic-ui-react'
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
    max-width: 300px;
    padding: 10px;
`

const ContactForm = () => {
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
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                >
         {({isValid,dirty})=> {
                return(
            <Form className="form ui">
                
                
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
        
           
               
                <Field id="message" name="message" placeholder="Message" as='textarea' component={TextField} multiLines={true}/>
            
           

                

                <Button type="submit">Submit</Button>
                </Form>
                
                )}}
     
    </Formik>
    
        </FormWrap>
      
    )
}

export default ContactForm
