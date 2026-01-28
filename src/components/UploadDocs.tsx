import React, { useState, useRef, ChangeEvent } from 'react';
import './UploadDocs.css';

export default function UploadDocs() {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.files) return;
        const selectedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    return (
        <section className="upload-container">
            <main className="upload-file">
                <input
                    className="upload-file-input"
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".txt,.md,text/plain"
                    onChange={handleFileSelect}
                />
            </main>
        </section>
    );
}
