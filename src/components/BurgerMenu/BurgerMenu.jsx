import React, { useState } from "react";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup";

function BurgerMenu() {
    return (
        <section className="burger">
            <button className="burger__button"></button>
            <BurgerMenuPopup />
        </section>
    )
}

export default BurgerMenu;