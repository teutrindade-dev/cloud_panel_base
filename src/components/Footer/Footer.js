import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <nav className="footer-column">
                <h6 className="footer-title">Services</h6>
                <a className="footer-link">Branding</a>
                <a className="footer-link">Design</a>
                <a className="footer-link">Marketing</a>
                <a className="footer-link">Advertisement</a>
            </nav>
            <nav className="footer-column">
                <h6 className="footer-title">Company</h6>
                <a className="footer-link">About us</a>
                <a className="footer-link">Contact</a>
                <a className="footer-link">Jobs</a>
                <a className="footer-link">Press kit</a>
            </nav>
            <nav className="footer-column">
                <h6 className="footer-title">Legal</h6>
                <a className="footer-link">Terms of use</a>
                <a className="footer-link">Privacy policy</a>
                <a className="footer-link">Cookie policy</a>
            </nav>
            <form className="footer-column">
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered"
                        />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;
