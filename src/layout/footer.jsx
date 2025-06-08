
function Footer() {
    return <footer className="page-footer
    blue lighten-2 accent-2">

        <div className="footer-copyright ">
            <div className="container">
            Ⓒ {new Date().getFullYear()}
            <br></br>Kirya Minkov
            <a className="grey-text
            text-lighten-3 right"
            href="!#">Reprository</a>
            </div>
        </div>
    </footer>
}

export { Footer };