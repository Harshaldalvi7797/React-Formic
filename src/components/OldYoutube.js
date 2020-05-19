import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = { name: "", email: "", channel: "" };
const onSubmit = values => {
  console.log("formic values", values);

};
const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string()
    .email("Invalid Email format")
    .required("required"),
  channel: Yup.string().required("required")
});

const OldYoutube = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div>
        <Form>
          <label htmlFor="name"> Name</label>
          <Field type="text" id="text" name="name" />{" "}
          <ErrorMessage name="name" />
          <label htmlFor="email"> Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="text" name="channel" />
          <ErrorMessage name="channel" />
          <button type="submit">Submit</button>
        </Form>
      </div>
    </Formik>
  );
};
export default OldYoutube;
