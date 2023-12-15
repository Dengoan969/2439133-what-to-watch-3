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
  Login = '/login',
  Logout = '/logout',
}
