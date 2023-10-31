import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./NewsAdminAdd.scss";
import { addNews } from "../../../../api/api";

export const NewsAdminAdd = (values) => {
  const addNewsFunction = async () => {
    try {
      await addNews(values);
    } catch (error) {}
  };
  return (
    <div className="news-add-form">
      <Formik
        initialValues={{ title: "", description: "", image: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          image: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          addNewsFunction(values);
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="description">Description</label>
          <Field name="description" type="text" />
          <ErrorMessage name="description" />

          <label htmlFor="image">Image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
