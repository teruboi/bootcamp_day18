// importing Form and Field module from
// React Final Form to create form elements
// and the styling
import Styles from "./styles";
import { Form, Field } from "react-final-form";
import React from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "../actions";

function EmployeeForm({ onClose }) {
  // adding dispatch to call the action in store
  const dispatch = useDispatch();

  // function called when the form is submitted
  // call submitForm with the form values
  // and close the modal
  const onSubmit = async (values) => {
    dispatch(submitForm(values));
    onClose()
  };

  return (
    // using style wrapper called from styles.js
    <Styles>
      <h1>Employee Form</h1>
      {/* form module from react-final-form */}
      <Form
        // it needs onSubmit for the function called when form is submitted
        // render to render the JSX to the page
        onSubmit={onSubmit}
        // props: handleSubmit for the function called when form module inside is submitted
        // form for the module used to render the form
        // submitting to validate if the form is in submitting state, returns boolean
        // pristine to validate if the value is not changed from the initial, returns boolean
        // values to get the values from the form, returns object
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              {/* Field module from react-final-form to create new input field */}
              {/* props: */}
              {/* name for the variable where the input is in */}
              {/* component for the type of field (input, select, textarea) */}
              {/* type for the input type */}
              {/* placeholder for displaying text when value still null or the same as initial */}
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Employed</label>
              <Field name="employed" component="input" type="checkbox" />
            </div>
            <div>
              <label>Education</label>
              <Field name="education" component="select">
                <option value={null} />
                <option value="High School">High School</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
              </Field>
            </div>
            <div>
              <label>Expertise</label>
              <div>
                <label>
                  <Field
                    name="expertise"
                    component="input"
                    type="checkbox"
                    value="HTML"
                  />{" "}
                  HTML
                </label>
                <label>
                  <Field
                    name="expertise"
                    component="input"
                    type="checkbox"
                    value="CSS"
                  />{" "}
                  CSS
                </label>
                <label>
                  <Field
                    name="expertise"
                    component="input"
                    type="checkbox"
                    value="JavaScript"
                  />{" "}
                  JavaScript
                </label>
                <label>
                  <Field
                    name="expertise"
                    component="input"
                    type="checkbox"
                    value="NodeJs"
                  />{" "}
                  NodeJs
                </label>
                <label>
                  <Field
                    name="expertise"
                    component="input"
                    type="checkbox"
                    value="React"
                  />{" "}
                  React
                </label>
              </div>
            </div>
            <div>
              <label>Preferred Technology</label>
              <div>
                <label>
                  <Field
                    name="tech"
                    component="input"
                    type="radio"
                    value="be"
                  />{" "}
                  Back End
                </label>
                <label>
                  <Field
                    name="tech"
                    component="input"
                    type="radio"
                    value="fe"
                  />{" "}
                  Front End
                </label>
                <label>
                  <Field
                    name="tech"
                    component="input"
                    type="radio"
                    value="fs"
                  />{" "}
                  Fullstack
                </label>
              </div>
            </div>
            <div>
              <label>Notes</label>
              <Field name="notes" component="textarea" placeholder="Notes" />
            </div>
            <div className="buttons">
              {/* using html button, with disabled props activated when
        submitting or pristine returns true, that means when
        the form is running the onSubmit function or the value hasn't
        been changed from the initial state */}
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            {/* outputting the form input in JSON format */}
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Styles>
  );
}

// exporting for use
export default EmployeeForm;
