import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FeedbackForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Поле "Имя" обязательно для заполнения';
    }
    if (!values.email) {
      errors.email = 'Поле "Email" обязательно для заполнения';
    } else if (!/^\S+@\S+$/i.test(values.email)) {
      errors.email = 'Пожалуйста, введите корректный email';
    }
    if (!values.message) {
      errors.message = 'Поле "Сообщение" обязательно для заполнения';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Отправка данных на сервер
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Имя:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <label htmlFor="message">Сообщение:</label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage name="message" component="span" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
