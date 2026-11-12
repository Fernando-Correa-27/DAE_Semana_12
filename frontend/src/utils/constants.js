export const STORAGE_KEYS = {
  THEME: 'theme',
  FAVORITES: 'favorites',
}

/**
 * User-facing copy. Keys stay in English and values in Spanish so the
 * interface can be translated without touching component logic.
 */
export const UI_TEXT = {
  APP_TITLE: import.meta.env.VITE_APP_TITLE || 'Cartelera de Cine',

  NAV_FEATURED: 'Destacada',
  NAV_MOVIES: 'Cartelera',
  NAV_CONTACT: 'Contacto',
  NAV_LABEL: 'Navegación principal',

  SEARCH_PLACEHOLDER: 'Buscar películas...',
  SEARCH_LABEL: 'Buscar películas',
  SEARCH_CLEAR: 'Limpiar búsqueda',
  ALL_GENRES: 'Todos los géneros',
  GENRE_FILTER_LABEL: 'Filtrar por género',

  FEATURED_SECTION: 'Película destacada',
  FEATURED_BADGE: 'Destacada',
  SEE_DETAILS: 'Ver Detalles',
  TRAILER: 'Tráiler',
  PREVIOUS_MOVIE: 'Película anterior',
  NEXT_MOVIE: 'Siguiente película',
  GO_TO_MOVIE: 'Ir a la película',
  CAROUSEL_LABEL: 'Selección de película',

  THEME_TO_LIGHT: 'Cambiar a modo claro',
  THEME_TO_DARK: 'Cambiar a modo oscuro',

  MOVIES_TITLE: 'En cartelera',
  RESULTS_FOR: 'Resultados para',
  RESULTS_SINGULAR: 'resultado encontrado',
  RESULTS_PLURAL: 'resultados encontrados',
  EMPTY_TITLE: 'Sin resultados',
  EMPTY_MESSAGE: 'No se encontraron películas con esos criterios.',
  NO_MOVIES: 'No hay películas disponibles en este momento.',
  CLEAR_FILTERS: 'Limpiar filtros',

  FAVORITE_ADD: 'Agregar a favoritos',
  FAVORITE_REMOVE: 'Quitar de favoritos',
  FAVORITES_COUNT_LABEL: 'Películas favoritas',
  FAVORITE_ADDED_TOAST: 'Se agregó a favoritas:',
  FAVORITE_REMOVED_TOAST: 'Se quitó de favoritas:',

  CLEAR_FILTER: 'Limpiar filtro',

  PREMIERES_EYEBROW: 'Estrenos',
  PREMIERES_TITLE: 'Próximos estrenos',
  PREMIERES_SUBTITLE: 'Descubre las películas que llegarán pronto a la cartelera.',
  PREMIERES_LOADING: 'Cargando estrenos…',
  PREMIERES_ERROR_TITLE: 'No se pudieron cargar los estrenos',
  PREMIERES_ERROR:
    'No se pudieron cargar los estrenos. Revisa tu conexión e inténtalo de nuevo.',
  PREMIERES_EMPTY: 'No hay estrenos disponibles',
  PREMIERES_EMPTY_MESSAGE: 'Vuelve a intentarlo más tarde.',
  RETRY: 'Reintentar',
  PREMIERE_BADGE: 'Próximo estreno',
  PREMIERES_CAROUSEL_LABEL: 'Carrusel de próximos estrenos',
  PREVIOUS_SLIDE: 'Estreno anterior',
  NEXT_SLIDE: 'Siguiente estreno',
  GO_TO_SLIDE: 'Ir al estreno',

  DETAIL_DIALOG_LABEL: 'Detalle de película',
  CLOSE_DETAIL: 'Cerrar detalle',
  SYNOPSIS: 'Sinopsis',
  SHOWTIMES: 'Horarios',
  TRAILER_HEADING: 'Tráiler',
  TRAILER_UNAVAILABLE: 'Tráiler no disponible',
  TRAILER_IFRAME_TITLE: 'Tráiler de',
  POSTER_ALT: 'Póster de',
  POSTER_FALLBACK_ALT: 'Póster no disponible',
  AGE_RATING_LABEL: 'Clasificación',
  RUNTIME_LABEL: 'Duración',
  SCORE_LABEL: 'Calificación',
  SCORE_OUT_OF: 'de 5',
  RELEASE_DATE_LABEL: 'Fecha de estreno',
  GENRES_LABEL: 'Géneros',

  FOOTER_PROJECT: 'Proyecto académico — DAE Semana 11',
  FOOTER_DISCLAIMER:
    'Todos los datos mostrados son ficticios y utilizados con fines educativos.',
}
