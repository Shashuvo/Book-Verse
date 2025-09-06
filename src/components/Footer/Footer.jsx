import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a href="https://github.com/Shashuvo" target="_blank" rel="noopener noreferrer" className="link link-hover">About us</a>
                <a href="https://www.linkedin.com/in/shahariat-hossen-045456279/" target="_blank" rel="noopener noreferrer" className="link link-hover">Contact</a>
                <Link to="/"><a className="link link-hover">Books</a></Link>
                <Link to='/pagesToRead' className="link link-hover">Pages to Read</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-6">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/o__shuv__o/?__pwa=1" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path d="M 8 3 C 5.2475888 3 3 5.2475888 3 8 L 3 16 C 3 18.752411 5.2475888 21 8 21 L 16 21 C 18.752411 21 21 18.752411 21 16 L 21 8 C 21 5.2475888 18.752411 3 16 3 L 8 3 z M 8 4.5 L 16 4.5 C 17.941589 4.5 19.5 6.0584112 19.5 8 L 19.5 16 C 19.5 17.941589 17.941589 19.5 16 19.5 L 8 19.5 C 6.0584112 19.5 4.5 17.941589 4.5 16 L 4.5 8 C 4.5 6.0584112 6.0584112 4.5 8 4.5 z M 17.25 6 A 0.75 0.75 0 0 0 17.25 7.5 A 0.75 0.75 0 0 0 17.25 6 z M 12 7 C 10.395834 7 9.0977407 7.6285667 8.2519531 8.5800781 C 7.4061656 9.5315896 7 10.770833 7 12 C 7 13.229167 7.4061656 14.46841 8.2519531 15.419922 C 9.0977407 16.371433 10.395834 17 12 17 C 13.604166 17 14.902259 16.371433 15.748047 15.419922 C 16.593834 14.46841 17 13.229167 17 12 C 17 10.770833 16.593834 9.5315896 15.748047 8.5800781 C 14.902259 7.6285667 13.604166 7 12 7 z M 12 8.5 C 13.229166 8.5 14.056075 8.9339333 14.626953 9.5761719 C 15.197832 10.21841 15.5 11.104167 15.5 12 C 15.5 12.895833 15.197832 13.78159 14.626953 14.423828 C 14.056075 15.066067 13.229166 15.5 12 15.5 C 10.770834 15.5 9.9439254 15.066067 9.3730469 14.423828 C 8.8021684 13.78159 8.5 12.895833 8.5 12 C 8.5 11.104167 8.8021684 10.21841 9.3730469 9.5761719 C 9.9439254 8.9339333 10.770834 8.5 12 8.5 z"></path>
                        </svg>
                    </a>

                    <a href='https://www.facebook.com/shahariat.hossen.524' target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Book Verse.</p>
            </aside>
        </footer>
    )
};

export default Footer;