import { HttpInterceptorFn } from '@angular/common/http';

export const logInterceptor: HttpInterceptorFn = (request, next) => {
  console.log('HTTP Request:', request.url);

  return next(request);
};
