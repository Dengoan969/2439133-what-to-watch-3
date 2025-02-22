import {
  changeGenre,
  requireAuthorization, setFavorites,
  setFilm,
  setFilmComments,
  setFilms,
  setFilmsLoadingStatus, setPromoFilm,
  setSimilarFilms, setUserData
} from './action';
import {Film, FilmInList, PromoFilm} from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';
import {getFilmsByGenre} from '../getFilmsByGenre';
import {AuthorizationStatus} from '../const';
import {Review} from '../mocks/films-reviews';
import {UserData} from '../types/user-data';

export type State = {
  genre: string;
  filmsByGenre: FilmInList[];
  films: FilmInList[];
  favorites: FilmInList[];
  similarFilms: FilmInList[];
  currentFilm?: Film;
  promoFilm?: PromoFilm;
  filmComments: Review[];
  filmsLoadingStatus: boolean;
  authorizationStatus: AuthorizationStatus;
  userData?: UserData;
};

export const initialState: State = {
  genre: 'All genres',
  filmsByGenre: [],
  films: [],
  similarFilms: [],
  favorites: [],
  currentFilm: undefined,
  promoFilm: undefined,
  filmComments: [],
  filmsLoadingStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: undefined
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsByGenre = getFilmsByGenre(action.payload, state.films);
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setFilmComments, (state, action) => {
      state.filmComments = action.payload;
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.filmsLoadingStatus = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
