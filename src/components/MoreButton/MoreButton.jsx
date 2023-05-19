import React from 'react';

function MoreButton(props) {
  const { moreButtonClick } = props;
  return (
    <section className="more">
      <button
        className="more__btn"
        type="button"
        aria-label="показать больше"
        onClick={moreButtonClick}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoreButton;
