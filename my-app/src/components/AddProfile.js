import React from 'react';
import { Form, Text } from 'react-form';

export default class AddProfile extends React.Component {
    render() {
        const validate = value => ({
            error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
            warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
            success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
        })
        return(
            <div>
                
                <Form>
                {formApi => (
                    <form onSubmit={formApi.submitForm} id="form1" className="mb-4">
                    <label htmlFor="name">Name</label>
                    <Text field="name" id="name" validate={validate} />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    </form>
                )}
                </Form>
                <Form>
                {formApi => (
                    <form onSubmit={formApi.submitForm} id="form2" className="mb-4">
                    <label htmlFor="description">Description</label>
                    <Text field="description" id="description" validate={validate} />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    </form>
                )}
                </Form>
                <Form>
                {formApi => (
                    <form onSubmit={formApi.submitForm} id="form3" className="mb-4">
                    <label htmlFor="picture">Picture</label>
                    <Text field="picture" id="picture" validate={validate} />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    </form>
                )}
                </Form>
                
            </div>
        );
    }
}