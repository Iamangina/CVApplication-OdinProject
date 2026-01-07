

export default function Header({ onDownload }){
    return(
        <header className="header">
            <h1> CV MAKER </h1>
            <button onClick={onDownload} className="download">
                Download
                </button>

        </header>

    )

}