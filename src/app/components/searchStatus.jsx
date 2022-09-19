import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  if (length === 0) {
    return (
      <h2 className="badge fs-3 bg-danger">Никто с тобой не тусанет сегодня</h2>
    );
  }

  const renderPhrase = (number) => {
    let phrase = "";
    const lastFigure = Number(number.toString().slice(-1));

    if ([2, 3, 4].indexOf(lastFigure) >= 0) {
      phrase = `${number} человека тусанет с тобой сегодня`;
    }

    if (number === 1 || number > 4) {
      phrase = `${number} человек тусанет с тобой сегодня`;
    }

    return phrase;
  };

  return <h2 className="badge fs-3 bg-primary">{renderPhrase(length)}</h2>;
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
};

export default SearchStatus;
