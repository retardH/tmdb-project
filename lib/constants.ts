export const NavLinks = [
  {
    id: 'movies',
    text: 'Movies',
    subLinks: [
      {
        path: '/discover?type=movie&search=popular',
        text: 'popular',
      },
      {
        path: '/discover?type=movie&search=now_playing',
        text: 'now playing',
      },
      {
        path: '/discover?type=movie&search=upcoming',
        text: 'upcoming',
      },
      {
        path: '/discover?type=movie&search=top_rated',
        text: 'top rated',
      },
    ],
  },
  {
    id: 'tv-shows',
    text: 'TV Shows',
    subLinks: [
      {
        path: '/discover?type=tv&search=popular',
        text: 'popular',
      },
      {
        path: '/discover?type=tv&search=airing_today',
        text: 'airing today',
      },
      {
        path: '/discover?type=tv&search=on_the_air',
        text: 'on tv',
      },
      {
        path: '/discover?type=tv&search=top_rated',
        text: 'top rated',
      },
    ],
  },
  {
    id: 'people',
    text: 'people',
    subLinks: [
      {
        path: '/popular-people',
        text: 'popular people',
      },
    ],
  },
  //   {
  //     id: 'more',
  //     path: '/',
  //     text: 'More',
  //   },
];

export const movieGenres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

export const tvGenres = [
  {
    id: 10759,
    name: 'Action & Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 10762,
    name: 'Kids',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10763,
    name: 'News',
  },
  {
    id: 10764,
    name: 'Reality',
  },
  {
    id: 10765,
    name: 'Sci-Fi & Fantasy',
  },
  {
    id: 10766,
    name: 'Soap',
  },
  {
    id: 10767,
    name: 'Talk',
  },
  {
    id: 10768,
    name: 'War & Politics',
  },
  {
    id: 37,
    name: 'Western',
  },
];

export const imageUrlOriginal = 'https://image.tmdb.org/t/p/original';
