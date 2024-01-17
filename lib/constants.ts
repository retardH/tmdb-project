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
        path: '/popular',
        text: 'popular',
      },
      {
        path: '/airing-today',
        text: 'airing today',
      },
      {
        path: '/on-tv',
        text: 'on tv',
      },
      {
        path: '/top-rated',
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

export const imageUrlOriginal = 'https://image.tmdb.org/t/p/original';
