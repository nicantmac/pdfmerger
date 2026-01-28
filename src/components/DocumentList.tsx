import "./DocumentList.css";

const files = [
    { fileName: "fndvufins", fileSize: 38, fileChars: 1000 },
    { fileName: "fndvufins", fileSize: 38, fileChars: 1000 },
    { fileName: "fndvufins", fileSize: 38, fileChars: 1000 },
    { fileName: "fndvufins", fileSize: 38, fileChars: 1000 },
    { fileName: "fndvufins", fileSize: 38, fileChars: 1000 },
];

export default function DocumentList() {
    return (
        <section className="document-list">
            <header className="document-list-head">
                <p className="document-list__count">
                    Files to merge ({files.length})
                </p>
                <button className="document-list__action">
                    Merge PDFs
                </button>
            </header>

            <ul className="document-list__items">
                {files.map((file, index) => (
                    <li key={index} className="document-card">
                        <div className="document-card__content">
                            <h3 className="document-card__name">
                                {file.fileName}
                            </h3>

                            <div className="document-card__meta">
                                <span>{file.fileSize} KB</span>
                                <span>{file.fileChars} chars</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
