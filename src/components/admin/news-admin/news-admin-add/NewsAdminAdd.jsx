import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./NewsAdminAdd.scss";
import { addNews, getNews } from "../../../../api/api";
import { useDispatch } from "react-redux";
import { changeNewsDataAdmin } from "../../../../redux/slices/adminSlice";

export const NewsAdminAdd = () => {
  const dispatch = useDispatch();

  const addNewsFunction = async (values) => {
    try {
      const res = await addNews(values);
      const newsData = await getNews(10);
      dispatch(changeNewsDataAdmin(newsData.data.data));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
        onSubmit={(values, { resetForm }) => {
          addNewsFunction(values);
          resetForm("");
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
