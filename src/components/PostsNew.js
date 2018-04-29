import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
/*reduxForm is very similar to the connect function from redux, it is what allows our 
 component to talk directly to the redux store
*/
class PostsNew extends Component {
  renderField(field) {
    // ...field.input is an object with onChange and other event handlers that exist in it, passing all of these to <input>
    return (
      <div className="form-group">
        <label> {field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          label="Title For Post"
          component={this.renderField}
        />
        <Field name="tags" label="Tags" component={this.renderField} />
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm"
  /* form key value 'PostsNewForm' is the name of the form, useful when wanting to show several different forms
  such as signup/sign in */
})(PostsNew);
