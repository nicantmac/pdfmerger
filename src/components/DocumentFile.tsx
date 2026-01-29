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
        <section className="document-file">
            {/* you can use file.name, file.size, etc */}
            <div className="document-card__content">
                <h3 className="document-card__name">
                    {file.fileName}
                </h3>

                <div className="document-card__meta">
                    <span>{file.fileSize} KB</span>
                    <span>{file.fileChars} chars</span>
                </div>
            </div>
        </section>
    );
}

