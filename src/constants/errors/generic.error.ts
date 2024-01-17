import { BaseError } from './base.error';

export namespace GenericAppError {
	export class UnexpectedError extends BaseError {
		public constructor(errMsg?: string, errorObject?: object) {
			super();
			this.message = errMsg || `Internal server error!`;
			this.name = UnexpectedError.name;
			this.errorObject = errorObject || {};
		}
	}

	export class AlreadyExistError extends BaseError {
		public constructor(errMsg?: string, errorObject?: object) {
			super();
			this.message = errMsg || `Record already exist!`;
			this.name = AlreadyExistError.name;
			this.errorObject = errorObject || {};
		}
	}

	export class NotFoundError extends BaseError {
		public constructor(errMsg?: string, errorObject?: object) {
			super();
			this.message = errMsg || `Record not found!`;
			this.name = NotFoundError.name;
			this.errorObject = errorObject || {};
		}
	}

	export class ValidationError extends BaseError {
		public constructor(errMsg?: string, errorObject?: object) {
			super();
			this.message = errMsg || 'Validation failed!';
			this.name = ValidationError.name;
			this.errorObject = errorObject || {};
		}
	}

	export class AppError extends BaseError {
		public errorObject: object;
		constructor(msg: string, errorObject?: any) {
			super(msg);
			this.errorObject = { errors: errorObject || {} };
			this.name = AppError.name;
			this.message = msg || 'Validation failed!';
		}
	}
}
