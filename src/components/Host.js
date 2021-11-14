import React, {useEffect, useRef} from 'react';
import { ConversationalForm } from 'conversational-form';
import './Host.css';

export default function MyForm() {
  let cf = null;
  const ref = useRef(null);
  const formFields = [
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
        'cf-questions': 'Please upload any certification you have.'
      },
      {
        'tag': 'input',
        'type': 'file',
        'name': 'photo',
        'cf-questions': 'Please upload your photo.'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'pets',
        'cf-questions': 'Do you have any pets?',
        'cf-label':'no',
        'value':'No'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'pets',
        'cf-label':'yes',
        'value':'Yes'
      }
  ];

  useEffect(function mount() {
    cf = ConversationalForm.startTheConversation({
      options: {
        theme: 'blue',
        submitCallback: submitCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
      },
      tags: formFields,
    });

    ref.current.appendChild(cf.el);

    return function unMount(){
      cf.remove();
    };
  }, []);

  function submitCallback() {
    var formDataSerialized = cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
  }

  return (
    <div className="form-element">
      <div ref={ref} />
    </div>
  );
}