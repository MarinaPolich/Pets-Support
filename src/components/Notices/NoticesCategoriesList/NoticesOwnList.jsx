import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userNotice } from "redux/notices/notices-operations";
import { filteredNoticesSelector } from "redux/notices/notices-selector";
import NoticeCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { BoxList, BoxButton, Button } from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const filteredNotices = useSelector(filteredNoticesSelector);

  useEffect(() => {
    dispatch(userNotice(currentPage));
  }, [dispatch, currentPage]);

  if (!filteredNotices) {
    return;
  }
  const totalPage = filteredNotices.length / currentPage / 8;

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
      <BoxList>
        {filteredNotices.map((item) => (
          <NoticeCategoryItem item={item} key={item._id}></NoticeCategoryItem>
        ))}
      </BoxList>
      <BoxButton>
        {currentPage !== 1 && (
          <Button type="submit" onClick={prevPage}>
            Prev Page
          </Button>
        )}
        {totalPage !== currentPage && totalPage && (
          <Button type="submit" onClick={nextPage}>
            Next Page
          </Button>
        )}
      </BoxButton>
    </>
  );
};

export default NoticesCategoriesList;
