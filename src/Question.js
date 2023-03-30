import { useState } from "react";

export default function Question({ title, content }) {
    const [showQuestion, setShowQuestion] = useState(false);

    function showQuestionClick() {
        setShowQuestion(!showQuestion);
    }

    return (
        <div className="question question-1">
            <div className="question-title question-1-title">
                <h3 className="question-1-h3">{title}</h3>
                <button type="button" className="btn-question" onClick={showQuestionClick}>
                    {!showQuestion ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M213.66 165.66a8 8 0 0 1-11.32 0L128 91.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 0 11.32Z" /></svg>
                    }
                </button>
            </div>
            {showQuestion && <div className="question-info">
                <h5 className="question-info-h5">{content}</h5>
            </div>}
        </div>
    )
}