import './Header.css';

export function Header() {
    return (
        <header>
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
            </div>
            <div className="menu">
                <ul>
                    <li><span>00</span> HOME</li>
                    <li><span>01</span> DESTINATION</li>
                    <li><span>02</span> CREW</li>
                    <li><span>03</span> TECHNOLOGY</li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg></li>
                </ul>
            </div>
        </header>
    )
}