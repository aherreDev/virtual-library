import { FC } from "react";

import useReadingList from "~/hooks/useReadingList";
import { Book } from "~/types";

import { CardBody, CardContainer, CardItem } from "../3DCard/3DCard";
import styles from "./BookCard.module.css";

interface BookCardProps {
  book: Book;
  testId?: string;
  isOnReadingList: boolean;
}

const BookCard: FC<BookCardProps> = ({ book, testId, isOnReadingList }) => {
  const { addBookToReadingList, removeBookFromReadingList } = useReadingList();

  const cardBodyTestId = `${testId}-cardBody`;
  const cardItemImgTestId = `${testId}-cardItemImg`;
  const cardItemTitleTestId = `${testId}-cardItemTitle`;
  const cardItemAuthorTestId = `${testId}-cardItemAuthor`;
  const cardItemGenreTestId = `${testId}-cardItemGenre`;

  const handleAddToReadingList = () => {
    addBookToReadingList(book);
  };

  const handleRemoveFromReadingList = () => {
    removeBookFromReadingList(book);
  };

  return (
    <CardContainer className={styles.interVar} testId={testId}>
      <CardBody className={styles.cardBody} testId={cardBodyTestId}>
        <CardItem
          translateZ="100"
          className={styles.cardItemImg}
          testId={cardItemImgTestId}
        >
          <div
            className={styles.cardItemImgBg}
            style={{ backgroundImage: `url(${book.cover})` }}
          />
        </CardItem>

        <CardItem
          translateZ="50"
          className={styles.cardItemTitle}
          testId={cardItemTitleTestId}
        >
          {book.title}
        </CardItem>

        <CardItem
          translateZ="50"
          className={styles.cardItemAuthor}
          testId={cardItemAuthorTestId}
        >
          {book.author.name}
        </CardItem>

        <CardItem
          translateZ="50"
          className={styles.cardItemGenre}
          testId={cardItemGenreTestId}
        >
          {book.genre}
        </CardItem>

        <div className={styles.cardActions}>
          {isOnReadingList ? (
            <button
              className="button is-danger"
              onClick={handleRemoveFromReadingList}
            >
              Remove from reading list
            </button>
          ) : (
            <button
              className="button is-primary"
              onClick={handleAddToReadingList}
            >
              Add to reading list
            </button>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default BookCard;
