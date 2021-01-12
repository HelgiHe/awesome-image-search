import React from "react";
import { ThemeProvider } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { SearchForm } from "./components/SearchForm";
import { Results } from "./components/Results";
import { fakeData } from "./lib/data";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/GlobalStyle";
import { fetchData } from "./lib/api";
import { Loader } from "./components/Loader";
import { ErrorMsg } from "./components/ErrroMsg";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [theme, setTheme] = React.useState("light");
  const [startIndex, setStartIndex] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [searchItems, setSearchItems] = React.useState([]);
  const [error, setError] = React.useState("");

  const [ref, inView] = useInView({ rootMargin: "0px 0px 300px 0px" });

  React.useEffect(() => {
    if (inView && searchItems.length) {
      (async function fetchNextResults() {
        setLoading(true);
        const data = await fetchData(startIndex, searchTerm);
        setStartIndex(data.queries.nextPage[0].startIndex);
        const newResults = [...searchItems, ...data.items];
        setSearchItems(newResults);
        setLoading(false);
      })();
    }
  }, [inView]);
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const resetSearch = () => {
    setSearchTerm("");
    setError("");
    setSearchItems([]);
  };

  const onSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = await fetchData(startIndex, searchTerm);
    if (data.searchInformation?.totalResults > 0) {
      setSearchItems(data.items);
      setStartIndex(data.queries.nextPage[0].startIndex);
    } else if (Number(data.searchInformation?.totalResults) === 0) {
      setError("Engar niðurstöður fundust");
    } else {
      setError("Eitthvað fór úrskeiðis reyndu aftur eða prófaðu seinna");
    }
    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header
        title="Awesome Image Search"
        selectedTheme={theme}
        handleToggle={() => changeTheme()}
      />
      <main>
        <SearchForm
          onSubmit={(event) => {
            onSearch(event);
          }}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          resetSearch={resetSearch}
        />
        <Results searchResults={searchItems} />
        {loading ? <Loader /> : null}
        {error ? <ErrorMsg message={error} /> : null}
      </main>
      <footer ref={ref}>
        <p>HH 2021</p>
      </footer>
    </ThemeProvider>
  );
};

export { App };
