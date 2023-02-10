import { useState } from "react";

function Contact() {

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

// function to take the event object and use it extract the target, resolve the 'name' property and get the value. 
// Then use the useState function and pass in a new object with mentioned data

  // const handleChange = (event) => {
  //   console.log(event.target);

  //   setFormData({
  //     // spread the formData array into the individual array values
  //     ...formData,
  //     // [event.target.name] will resolve to value of the name= property. Then the event.target.value is the value of what is input
  //     // name: <value> e.g. "Simon"
  //     [event.target.name]: event.target.value,
  //     // email: <value> e.g. "Simon" 
  //     [event.target.name]: event.target.value,
  //     // name: <value> e.g. "Simon"
  //     [event.target.name]: event.target.value
  //   });

  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(formData);
  }

    return (

      <main>

        <h1>Get in Touch</h1>
  
        {/* <form onSubmit={handleSubmit}>
          <input name="name" onChange={handleChange} type="text" placeholder="Enter you name"></input>
          <input name="email" onChange={handleChange} type="text" placeholder="Enter your email address"></input>
          <textarea name="message" onChange={handleChange} placeholder="Enter your message..." cols="30" rows="10"></textarea>
          <button>Submit</button>
        </form> */}

        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="1cd4e450-87b0-4c0f-add0-afcb7e600b55"></input>
          <input type="text" name="name" placeholder="Enter you name" required></input>
          <input type="email" name="email" placeholder="Enter your email address" required></input>
          <textarea name="message" placeholder="Your message..." required></textarea>
          <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
          <button type="submit">Submit Form</button>
        </form>
        
      </main>

    );
  };
  
  export default Contact;