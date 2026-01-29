import "./DocumentList.css";
import DocumentFile from "./DocumentFile";

type DocumentFileType = {
    fileName: string;
    fileSize: number;
    fileChars: number;
};

const files: DocumentFileType[] = [
    { fileName: "vnirvnrds", fileSize: 20, fileChars: 1000 },
    { fileName: "vnirvnrds", fileSize: 20, fileChars: 1000 },
    { fileName: "vnirvnrds", fileSize: 20, fileChars: 1000 },
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

            {files.length < 2 ? (
                <div className="file-add-more">
                    <h3>Add at least 2 documents to combine</h3>
                    <p>No documents yet</p>
                </div>
            ) : (
                <ul className="document-list__items">
                    {files.map((file, index) => (
                        <DocumentFile file={file} key={index} />
                    ))}
                </ul>
            )}
        </section>
    );
}
