import React, { useState } from "react";
import "./Question.scss";

export function Question({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);

    const showParagraph = () => {
        setShowInfo(!showInfo);
    }

    return (
        <article className="question-container">
            <div className="title-btn">
                <h4>{title}</h4>
                <button
                    type="button"
                    onClick={showParagraph}
                >
                    <i class="fas fa-plus-circle"></i>
                </button>
            </div>
            {showInfo && <p>{info}</p>}
        </article>
    )
}