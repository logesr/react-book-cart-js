import { BookCards } from "./book-cards";

export function Catalog({ items }) {
  return (
    <>
      <h1 className="text-3xl font-bold py-8 px-4">Books Catalog</h1>
      <BookCards books={items}></BookCards>
    </>
  );
}
