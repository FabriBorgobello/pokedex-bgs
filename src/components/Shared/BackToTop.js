import * as React from "react";
import styles from "./BackToTop.module.scss";

const BackToTop = () => {
    const [showScroll, setShowScroll] = React.useState(false);
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };
    window.addEventListener("scroll", checkScrollTop);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={styles.FabContainer}
            onClick={scrollTop}
            style={{ height: 40, display: showScroll ? "flex" : "none" }}
        >
            <i className={`fas fa-arrow-up scrollTop ${styles.FabIcon}`} />
        </div>
    );
};

export default BackToTop;
