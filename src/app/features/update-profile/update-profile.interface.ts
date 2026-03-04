import { InferType } from 'yup';
import { updateProfileScheme } from './update-profile.constant';

export type updateProfileType = InferType<typeof updateProfileScheme>;
