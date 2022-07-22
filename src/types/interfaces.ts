export interface UserLogin {
  email: string;
  password: string;
}

export interface RegisterUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
}

export interface GamesTypes {
  id: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imbScore: number;
  trailerYoutubeUrl: string;
  gameplayYouTubeUrl: string;
  genders: [
    {
      id: string;
      name: string;
    }
  ];
}

export interface GenrerTypes {
  id: string;
  name: string;
  gamesId?: string;
  gamesGender: [
    {
      title: string;
    }
  ];
}

export interface ProfilesTypes {
  id?: string;
  title: string;
  imageUrl: string;
  userId: string;
  user?: {
    nickname: string;
    email: string;
    isAdmin: boolean;
  };
  games?: [
    {
      id: string;
      title: string;
      coverImageUrl: string;
      description: string;
      year: number;
      imbScore: number;
      trailerYoutubeUrl: string;
      gameplayYouTubeUrl: string;
    }
  ];
}

export interface HomepageTypes {
  profileData: {
    title: string;
    imageUrl: string;
    user: {
      nickname: string;
      isAdmin: boolean;
    };
    favoriteGames: {
      games: [
        {
          title: string;
          coverImageUrl: string;
          description: string;
          imbScore: number;
          genders: [
            {
              name: string;
            }
          ];
        }
      ];
    };
    games: [
      {
        title: string;
        coverImageUrl: string;
        description: string;
        imbScore: number;
        genders: [
          {
            name: string;
          }
        ];
      }
    ];
  };
  genrerList: [
    {
      genrer: string;
      title: [string];
    }
  ];
}

export interface FavoriteGamesType {
  favoriteGames: {
    games: [
      {
        title: string;
        coverImageUrl: string;
        description: string;
        imbScore: number;
        genders: [
          {
            name: string;
          }
        ];
      }
    ];
  };
}

export interface GamesProfile {
  games: [
    {
      title: string;
      coverImageUrl: string;
      description: string;
      imbScore: number;
      genders: [
        {
          name: string;
        }
      ];
    }
  ];
}