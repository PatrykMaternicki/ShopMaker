import { ValidKey } from './ValidKey';

export const isEmpty = value => !!value.replace(/\s/g, '') || 'Please complete a field';
export const isInCorrectEmail = value => ValidKey.emailKey.test(String(value).toLowerCase()) || 'Email is incorrect';
