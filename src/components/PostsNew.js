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
        {field.meta.touched ? (
          <label style={{ color: "red" }}>{field.meta.error}</label>
        ) : (
          ""
        )}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title For Post"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  //values is an objuect whose keys are field titles and values are the content for those fields
  //whenever the user attempts to submit the form this function will be called
  const errors = {};
  //Validate the inputs from 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters!";
  }
  if (!values.categories) {
    errors.categories = "Enter a categorey!";
  }
  if (!values.content) {
    errors.content = "Enter some content please!";
  }

  return errors;
  //if errors is an empty oject then the form is fine to submit, otherwise redux-form assumes form is invalid
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
  /* form key value 'PostsNewForm' is the name of the form, useful when wanting to show several different forms
  such as signup/sign in */
})(PostsNew);
