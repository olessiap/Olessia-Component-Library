import './holyGrailLayout.scss';

export const HolyGrailLayout = () => {
    return (
        <div className="holy-grail-body">
            <header>HEADER</header>
            <div className="columns">
                <nav>NAV</nav>
                <main>MAIN</main>
                <aside>SIDEBAR</aside>
            </div>
            <footer>FOOTER</footer>
        </div>
    );
}