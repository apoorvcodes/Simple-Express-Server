import { ValidationError } from 'express-validator';

export const errorFormatter = ({ location, msg, param }: ValidationError) => {
	return `${location}[${param}]: ${msg}`;
};
