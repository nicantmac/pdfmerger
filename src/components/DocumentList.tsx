// import React, { useState } from 'react';
import './DocumentList.css';

const files = [
    {fileName: "fndvufins", fileSize: 38, fileChars: 1000},
    {fileName: "fndvufins", fileSize: 38, fileChars: 1000},
    {fileName: "fndvufins", fileSize: 38, fileChars: 1000},
    {fileName: "fndvufins", fileSize: 38, fileChars: 1000},
    {fileName: "fndvufins", fileSize: 38, fileChars: 1000},
]

export default function DocumentList() {

    return (
        <section className="upload-container">
            <main>
                <div className="doc-list-header">
                    <p>Files to merge (2)</p>
                    <button>Merge PDF's</button>
                </div>
                <div>
                    My list
                    <div>
                        {files.map((item, index) => (
                            <div key={index} className="file-card">
                                {/*<img/>*/}
                                <div>
                                    <h3>{item.fileName}</h3>
                                    <div>
                                        <p>{item.fileSize}</p>
                                        <p>{item.fileChars}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
}
