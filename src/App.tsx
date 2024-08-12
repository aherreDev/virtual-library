import { Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

// import BooksList from "~/components/BooksList/BooksList";
import Navbar from "~/components/Navbar/Navbar";
import PageSections from "~/components/PageSections/PageSections";

const BooksList = lazy(() => import("~/components/BooksList/BooksList"));

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="has-background-white">
        <PageSections />

        <Suspense fallback={<Spinner size="xl" />}>
          <BooksList />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
