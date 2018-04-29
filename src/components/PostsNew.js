import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
/*reduxForm is very similar to the connect function from redux, it is what allows our 
 component to talk directly to the redux store
*/
class PostsNew extends Component {
  render() {
    return <form>
      <Field
      name='title'
      componenet={}
      />
    </form>;
  }
}

export default reduxForm({
  form: 'PostsNewForm'
  /* form key value 'PostsNewForm' is the name of the form, useful when wanting to show several different forms
  such as signup/sign in */
})(PostsNew);
