export enum AppRoute {
Main = '/',
SignIn = '/login',
MyList = '/mylist',
Film='/films/:id',
AddReview = '/films/:id/review',
Player='/player/:id'
}

export enum APIRoute {
  Films = '/films',
  Film = '/films/:id',
  Promo = '/promo',
  Comments = '/comments',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
