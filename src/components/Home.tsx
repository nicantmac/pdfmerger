import React, { useState } from "react";
import "./Home.css";
import UploadDocs from "./UploadDocs";
import DocumentList from "./DocumentList";

type DocumentFileType = {
    fileId: number;
    fileName: string;
    fileSize: number;
    fileChars: number;
};

function Home() {
    const [files, setFiles] = useState<DocumentFileType[]>([]);

    return (
        <section className="Home">
            <header className="home-head">
                <h1 className="hero-title">Combine your documents</h1>
                <p className="hero-subtitle">
                    Combine multiple PDF documents into a single file quickly and securely. No registration required.
                </p>
            </header>

            <main className="doc-section">
                <UploadDocs
                    onFilesSelected={(newFiles) => {
                        const converted = newFiles.map((file, index) => ({
                            fileId: Date.now() + index,
                            fileName: file.name,
                            fileSize: Math.round(file.size / 1024),
                            fileChars: 0,
                        }));
                        setFiles((prev) => [...prev, ...converted]);
                    }}
                />
                <div className="doc-spacer"><span></span></div>
                <DocumentList files={files} />
            </main>
        </section>
    );
}

export default Home;
