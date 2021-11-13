import React from 'react';
import { ConversationalForm } from 'conversational-form';
import './Host.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        'tag': 'input',
        'type': 'text',
        'name': 'firstname',
        'cf-questions': 'What is your firstname?'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'lastname',
        'cf-questions': 'What is your lastname?'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'email',
        'cf-questions': 'What is your email?'
      },
      {
        'tag': 'input',
        'type': 'file',
        'name': 'Certification',
        'cf-questions': 'please upload your picture.'
      }
    ];
    
    this.submitCallback = this.submitCallback.bind(this);
  }
  
  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
      },    
      tags: this.formFields
    });
    this.elem.appendChild(this.cf.el);
  }
  
  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
  }
  
  render() {
    return (
      <div className="form-element">
        <div
          ref={ref => this.elem = ref}
        />
      </div>
    );
  }
}