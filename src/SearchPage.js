import React from "react";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import useGoogleSearch from "./useGoogleSearch";
import { useStateValue } from "./StateProvider";
import Search from "./Search";
function SearchPage() {
  const [{ term = "bmw" }, dispatch] = useStateValue();

  //custom hook
  const { data } = useGoogleSearch(term);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://cdn.vox-cdn.com/thumbor/HqBAiwc9uD1sHBw2Uvac03pCXKE=/0x0:2012x1341/1400x1050/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime})seconds for
            {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                    />
                  )}
                {item.displayLink}
              </a>

              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
