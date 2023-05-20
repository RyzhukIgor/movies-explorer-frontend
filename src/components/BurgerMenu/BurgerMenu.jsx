import React, { useState } from 'react';
import BurgerMenuPopup from '../BurgerMenuPopup/BurgerMenuPopup';

function BurgerMenu() {
  const [isBtnOpen, setIsBtnOpen] = useState(false);
  function clickBtnOpen() {
    setIsBtnOpen(true);
  }

  function clickBtnClose() {
    setIsBtnOpen(false);
  }

  return (
    <section className="burger">
      <button className="burger__button" onClick={clickBtnOpen}></button>
      <BurgerMenuPopup isOpen={isBtnOpen} isClose={clickBtnClose} />
    </section>
  );
}

export default BurgerMenu;
