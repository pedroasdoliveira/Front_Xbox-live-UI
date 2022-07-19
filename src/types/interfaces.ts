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
