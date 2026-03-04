import { object, string } from 'yup';

export const updateProfileScheme = object({
  username: string().required('Name is required').min(2, 'Too Short!').max(50, 'Too Long!'),
  bio: string().required('Question is required').min(4, 'Too Short!').max(100, 'Too Long!'),
});
