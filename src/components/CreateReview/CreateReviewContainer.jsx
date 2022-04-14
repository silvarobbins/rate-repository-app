import { Formik } from 'formik';
import * as yup from 'yup';

import ReviewForm from './ReviewForm';

const initialValues = {
  owner: '',
  name: '',
  rating: '',
  review: ''
};

const validationSchema = yup.object().shape({
  owner: yup
    .string()
    .required('Repostiory owner name is required'),
  name: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number("Rating should be a number between 0 and 100")
    .required("Rating is required")
    .min(0)
    .max(100),
  review: yup
    .string()
});


const CreateReviewContainer = ({onSubmit}) => {
  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReviewContainer;