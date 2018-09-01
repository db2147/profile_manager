import React from 'react';
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';

export default class AddProfile extends React.Component {
    render() {
        return(
            <div>   
                <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
                    {formApi => (
                    <form onSubmit={formApi.submitForm} id="form2">
                        <label htmlFor="firstName">First name</label>
                        <Text field="firstName" id="firstName" />
                        <label htmlFor="lastName">Last name</label>
                        <Text field="lastName" id="lastName" />
                        <label htmlFor="bio">Bio</label>
                        <TextArea field="bio" id="bio" />
                        <button type="submit" className="mb-4 btn btn-primary">
                        Submit
                        </button>
                    </form>
                    )}
                </Form> 
                
            </div>
        );
    }
}