import React from "react";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";

const initialValues = { name: "", email: "", channel: "" };
const onSubmit = values => {
  console.log("formic values", values);
  console.log("visited", Formik.touched);
};
const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string()
    .email("Invalid Email format")
    .required("required"),
  channel: Yup.string().required("required")
});

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "Harshal",
      email: "",
      channel: ""
    },
    onSubmit: values => {
      console.log("formic values", formik.values);
    }
  });
  console.log("visited fields", formik.touched);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {" "}
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}

          <label htmlFor="email"> Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="text"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.errors.channel ? <div>{formik.errors.channel}</div> : null}
          <button type="submit">Submit</button>
        </form>
      </div>
    </Formik>
  );
};
export default YoutubeForm;
