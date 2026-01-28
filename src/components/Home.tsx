import React from 'react';
import "./Home.css";
import UploadDocs from "./UploadDocs";
import DocumentList from "./DocumentList";

function Home() {
    return (
        <section className="Home">
            <header>
                <h1>Combine your documents</h1>
                <p>Combine multiple PDF documents into a single
                    file quickly and securely. No registration required.
                </p>
            </header>
            <main className="doc-section">
                <UploadDocs />
                <div className="doc-spacer"><span></span></div>
                <DocumentList />
            </main>
        </section>
    );
}

export default Home;
