import "./DocumentList.css";
import { useState } from "react";
import DocumentFile from "./DocumentFile";

type DocumentFileType = {
    fileId: number;
    fileName: string;
    fileSize: number;
    fileChars: number;
};

interface DocumentListProps {
    files: DocumentFileType[];
}


const files: DocumentFileType[] = [
    { fileId: 1, fileName: "fghj", fileSize: 10, fileChars: 1000 },
    { fileId: 2, fileName: "fghj", fileSize: 10, fileChars: 1000 },
    { fileId: 3, fileName: "fghj", fileSize: 10, fileChars: 1000 },
    { fileId: 4, fileName: "fghj", fileSize: 10, fileChars: 1000 },
];

export default function DocumentList({ files}: DocumentListProps) {
    const [initialFiles, setFiles] = useState([...files]);

    function handleDeleteFile(fileId: number) {
        setFiles(prev => prev.filter(file => file.fileId !== fileId));
    }

    return (
        <section className="doc-list">
            <header className="doc-head">
                <p className="doc-count">
                    Files to merge ({initialFiles.length})
                </p>
                <button className="doc-merge-btn">Merge PDFs</button>
            </header>

            {initialFiles.length < 2 ? (
                <div className="file-add-sect">
                    <h3 className="file-add-head">Add at least 2 documents to combine</h3>
                    <p className="file-add-text">No documents yet</p>
                </div>
            ) : (
                <ul className="doc-list-items">
                    {initialFiles.map((file) => (
                        <li key={file.fileId}>
                            <DocumentFile file={file} onDelete={handleDeleteFile} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
