import "./DocumentFile.css";
import fileIcon from "/icons/svgs/file.svg";
import "./DocumentFile.css";

interface DocumentFileProps {
    file: {
        fileName: string;
        fileSize: number;
        fileChars: number;
    };
}

export default function DocumentFile({ file }: DocumentFileProps) {
    return (
        <section className="doc-file">
            <div className="file-content">
                {/*<img src={fileIcon} alt="file-icon"/>*/}
                <span>fgbfgdgtds</span>
                <main className="file-info">
                    <h3 className="file-name">{file.fileName}</h3>
                    <div className="file-meta">
                        <span className="file-size">{file.fileSize} KB</span>
                        <span className="file-chars">{file.fileChars} chars</span>
                    </div>
                </main>
                <button className="file-del">trash</button>
            </div>
        </section>
    );
}

