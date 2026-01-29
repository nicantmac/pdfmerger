import "./DocumentList.css";
import DocumentFile from "./DocumentFile";

type DocumentFileType = {
    fileName: string;
    fileSize: number;
    fileChars: number;
};

const files: DocumentFileType[] = [
    { fileName: "fghj", fileSize: 10, fileChars: 1000 },
    { fileName: "fghj", fileSize: 10, fileChars: 1000 },
    { fileName: "fghj", fileSize: 10, fileChars: 1000 },
    { fileName: "fghj", fileSize: 10, fileChars: 1000 },
];

export default function DocumentList() {
    return (
        <section className="doc-list">
            <header className="doc-head">
                <p className="doc-count">
                    Files to merge ({files.length})
                </p>
                <button className="doc-merge-btn">Merge PDFs</button>
            </header>

            {files.length < 2 ? (
                <div className="file-add-sect">
                    <h3 className="file-add-head">Add at least 2 documents to combine</h3>
                    <p className="file-add-text">No documents yet</p>
                </div>
            ) : (
                <ul className="doc-list-items">
                    {files.map((file, index) => (
                        <li key={index}>
                            <DocumentFile file={file} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
