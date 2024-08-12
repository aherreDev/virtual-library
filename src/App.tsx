import { lazy, Suspense } from "react";

// import BooksList from "~/components/BooksList/BooksList";
import Navbar from "~/components/Navbar/Navbar";
import PageSections from "~/components/PageSections/PageSections";

import styles from "./App.module.css";

const BooksList = lazy(() => import("~/components/BooksList/BooksList"));

function App() {
  const heroSectionClasses = `hero is-medium is-primary ${styles.heroBanner}`;

  return (
    <div className="App has-background-white mb-4">
      <Navbar />

      <section className={heroSectionClasses}>
        <div className="hero-body is-pos-relative">
          <p className="title">Welcome to your virtual library 📚</p>
          <p className="subtitle">
            To get started just go trough the available books list and select
            the ones that you want to to add to your reading list. Happy
            reading!
          </p>
        </div>
      </section>

      <div className="container has-background-white my-4">
        <h2 className="title is-3 has-text-primary">
          Explore all the unique books
        </h2>

        <PageSections />

        <Suspense
          fallback={<div className="loader is-loading" data-testid="spinner" />}
        >
          <BooksList />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
