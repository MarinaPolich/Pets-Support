import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SVG from "react-inlinesvg";
import { deleteNotice } from "redux/notices/notices-operations";
import {
  addFavoriteNotice,
  deleteFavoriteNotice,
} from "redux/auth/auth-operations";
import { getIsLoggedIn } from "redux/auth/auth-selector";
import { del, favoriteDefault, favorite } from "assets/icon";
import {
  Notice,
  BoxImage,
  Image,
  Category,
  FavoriteLabel,
  FavoriteCheck,
  FavoriteBox,
  DescriptionBox,
  Title,
  List,
  ListItem,
  SpanBreed,
  SpanPlace,
  SpanAge,
  BtnBox,
  ButtonMore,
  ButtonDelete,
  SvgDelete,
} from "./NoticeCategoryItem.styled";
import { Notify } from "notiflix";

export default function NoticeCategoryItem({ item }) {
  const [isCheck, setIsCheck] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLoggedIn);

  function birthDateToAge(birthDate) {
    birthDate = new Date(birthDate);
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    return now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
  }
  const favoriteCheckbox = ({ target: { checked } }) => {
    if (!isLogin) {
      Notify.failure("You need to login");
      return;
    }

    if (checked) {
      dispatch(addFavoriteNotice(item._id));
    } else {
      dispatch(deleteFavoriteNotice(item._id));
    }
    setIsCheck(checked);
  };

  return (
    <Notice>
      <BoxImage>
        <Image src={item.avatarUrl} alt={item.title} />
        <Category>{item.category}</Category>
        <FavoriteLabel>
          <FavoriteCheck
            type="checkbox"
            name="favorite-check"
            checked={isCheck}
            onChange={favoriteCheckbox}
          />
          <FavoriteBox>
            {!isCheck ? (
              <SVG src={favoriteDefault} width="28" height="28" />
            ) : (
              <SVG src={favorite} width="28" height="28" />
            )}
          </FavoriteBox>
        </FavoriteLabel>
      </BoxImage>
      <DescriptionBox>
        <Title>{item.title}</Title>
        <List>
          <ListItem>
            Breed: <SpanBreed>{item.breed}</SpanBreed>
          </ListItem>
          <ListItem>
            Place: <SpanPlace>{item.location}</SpanPlace>
          </ListItem>
          <ListItem>
            Age: <SpanAge>{birthDateToAge(item.birthday)} year</SpanAge>
          </ListItem>
        </List>
        <BtnBox>
          <ButtonMore type="submit">Learn more</ButtonMore>
          {item.category === "own" && (
            <ButtonDelete
              type="submit"
              onClick={() => dispatch(deleteNotice(item._id))}
            >
              Delete{" "}
              <SvgDelete src={del} width="20" height="20" title="delete" />
            </ButtonDelete>
          )}
        </BtnBox>
      </DescriptionBox>
    </Notice>
  );
}
