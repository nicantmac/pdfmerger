import "./DocumentFile.css";
import fileIcon from "../assets/icons/file.svg";
import delIcon from "../assets/icons/xmark.svg";

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
                <img className="file-icon" src={fileIcon} alt="file-icon"/>
                <span className="file-type">txt</span>

                <div className="file-info">
                    <h3 className="file-name">{file.fileName}</h3>
                    <div className="file-meta">
                        <span className="file-size">{file.fileSize} KB</span>
                        <span className="file-chars">{file.fileChars} chars</span>
                    </div>
                </div>

                <button className="file-del" type="button" aria-label="Remove file">
                    <img className="file-icon" src={delIcon} alt="delete-icon"/>
                </button>
            </div>
        </section>
    );
}