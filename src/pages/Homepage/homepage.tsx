import CreateGamesAdmin from "components/Create/CreateGames";
import CreateGenrerAdmin from "components/Create/CreateGenre";
import ReturnPage from "components/ReturnPage";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { Favorite } from "Service/favoriteService";
import { Profiles } from "Service/profileService";
import { FavoriteGamesType, ProfilesTypes } from "types/interfaces";
import * as Style from "./homepage-style";

const Homepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [profileInfos, setProfileInfos] = useState<ProfilesTypes>({
    title: "",
    imageUrl: "",
    userId: "",
    user: {
      nickname: "",
      email: "",
      isAdmin: false,
    },
  });

  const [favoriteGames, setFavoriteGames] = useState<FavoriteGamesType>({
    games: [
      {
        id: "",
        title: "",
        coverImageUrl: "",
        description: "",
        imbScore: 0,
        genders: [
          {
            name: "",
          },
        ],
      },
    ],
    id: "",
  });

  useEffect(() => {
    profileInfosId();
    profileFavoriteGames();
  }, []);

  const profileInfosId = async () => {
    if (id) {
      const getIdProfile = await Profiles.ProfileGetById(id);

      const profileValues = {
        title: getIdProfile?.data.title,
        imageUrl: getIdProfile?.data.imageUrl,
        userId: getIdProfile?.data.userId,
        user: {
          nickname: getIdProfile?.data.user.nickname,
          email: getIdProfile?.data.user.email,
          isAdmin: getIdProfile?.data.user.isAdmin,
        },
      };

      setProfileInfos({
        ...profileInfos,
        ...profileValues,
      });
    }
  };

  const profileFavoriteGames = async () => {
    if (id) {
      const res = await Favorite.GetFavoriteByProfileId(id);
      setFavoriteGames(res?.data.favoriteGames);
    }
  };

  const UserConfigsNavigate = () => {
    navigate(`/user/${profileInfos?.userId}`);
  };

  return (
    <Style.Homepage>
      <ReturnPage Route={() => navigate("/profiles")} />

      <Style.AdminProfileInfos>
        <Style.ProfileImg
          src={profileInfos?.imageUrl}
          alt="Capa do perfil"
          onClick={UserConfigsNavigate}
        />
        <Style.ProfileName>{profileInfos?.title}</Style.ProfileName>
        <Style.ProfileName>{profileInfos.user?.nickname}</Style.ProfileName>
      </Style.AdminProfileInfos>

      {profileInfos.user?.isAdmin === true ? (
        <Style.AdminDiv>
          <CreateGamesAdmin
            Route={() => navigate(`/profile/createGames&Genrer/${id}`)}
          />
          <CreateGenrerAdmin Route={() => navigate(`/profile/genrers/${id}`)} />
        </Style.AdminDiv>
      ) : (
        ""
      )}

      <Style.CardSection>
        {favoriteGames
          ? favoriteGames.games.map((game, index) => (
              <Style.ContentCard key={index}>
                <Style.TitleGame>{game.title}</Style.TitleGame>
                <Style.CoverImageGame
                  onClick={() => navigate(`/profile/game/${game.id}`)}
                  src={game.coverImageUrl}
                  alt={"image de fundo do jogo" + game.title}
                />
                <Style.ScoreGame>
                  <ReactStars
                    count={5}
                    value={game.imbScore}
                    edit={false}
                    size={35}
                    color2={"#ffd700"}
                  />
                </Style.ScoreGame>
              </Style.ContentCard>
            ))
          : ""}
      </Style.CardSection>

      <Style.InfoSection>
        <Style.InfoCard
          onClick={() => navigate(`/profile/homepage/list/${id}`)}
        >
          <p>Minha biblioteca</p>
        </Style.InfoCard>
        <Style.InfoCard onClick={() => navigate(`/profile/homepage/library`)}>
          <p>Ver tudo disponivel</p>
        </Style.InfoCard>
      </Style.InfoSection>
    </Style.Homepage>
  );
};

export default Homepage;
