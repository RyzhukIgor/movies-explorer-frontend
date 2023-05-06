
import Preloader from "../Preloader/Preloader";

function MoreButton() {

    return (
        <section className="more">
            <button
                className="more__btn"
                type="button"
                aria-label="показать больше"
            >
                Ещё
            </button>
            <Preloader/>
        </section>
    );
}

export default MoreButton;
