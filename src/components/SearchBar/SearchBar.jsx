import { Field, Form, Formik } from "formik";

const SearchBar = ({ setQuery }) => {
  const handleSubmit = (values) => {
    console.log(values);
    //форма віддає свої дані  (я їх записала і віддала)
    setQuery(values.query);
  };

  return (
    <div>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
