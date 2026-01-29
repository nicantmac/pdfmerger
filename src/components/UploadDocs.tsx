import React, { useState, useRef, ChangeEvent } from "react";
import "./UploadDocs.css";

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
            <label className="upload-file">
                <input
                    multiple
                    className="upload-file-input"
                    ref={fileInputRef}
                    type="file"
                    accept=".txt,.md,text/plain"
                    onChange={handleFileSelect}
                />

                <div className="upload-content">
          <span className="upload-plus">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="upload-icon"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
              />
            </svg>
          </span>

                    <p>Upload files</p>
                    <small>
                        .txt, .md supported{files.length > 0 ? ` • ${files.length} selected` : ""}
                    </small>
                </div>
            </label>
        </section>
    );
}
