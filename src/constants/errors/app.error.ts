import { BaseError } from './base.error';

export class AppError extends BaseError {
	public errorObject: object;
	constructor(msg: string, errorObject?: any) {
		super(msg);
		this.errorObject = { errors: errorObject || {} };
		this.name = AppError.name;
		this.message = msg || 'Validation failed!';
	}
}
