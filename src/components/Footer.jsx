import React from "react";
import "../styles/footer.css";
import { AiFillHeart, AiFillInstagram } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo/Logo.png";

const Footer = () => {
  const solutions = [
    {
      name: "brand",
      link: "",
    },
    {
      name: "source",
      link: "",
    },
    {
      name: "engage",
      link: "",
    },
    {
      name: "assess",
      link: "",
    },
    {
      name: "hire",
      link: "",
    },
  ];

  const products = [
    {
      name: "technology platform",
      link: "",
    },
    {
      name: "online recruitment platform",
      link: "",
    },
    {
      name: "quizzing / assessments",
      link: "",
    },
    {
      name: "online hackathons / coding",
      link: "",
    },
    {
      name: "business simulation games",
      link: "",
    },
  ];

  const participate = [
    {
      name: "competitions & challenges",
      link: "",
    },
    {
      name: "quizzes",
      link: "",
    },
    {
      name: "hackathons",
      link: "",
    },
    {
      name: "workshops & webinars",
      link: "",
    },
    {
      name: "conferences",
      link: "",
    },
    {
      name: "cultural events",
      link: "",
    },
    {
      name: "college festivals",
      link: "",
    },
  ];

  const apply = [
    {
      name: "internships",
      link: "",
    },
    {
      name: "jobs",
      link: "",
    },
    {
      name: "scholarships",
      link: "",
    },
  ];

  const learn = [
    {
      name: "courses",
      link: "",
    },
    {
      name: "articles",
      link: "",
    },
    {
      name: "workshops",
      link: "",
    },
    {
      name: "technopedia",
      link: "",
    },
  ];

  const practice = [
    {
      name: "MCQ mock tests",
      link: "",
    },
    {
      name: "Code & Ace Hiring assessments",
      link: "",
    },
    {
      name: "100-Day of Coding sprint",
      link: "",
    },
  ];

  const properties = [
    {
      name: "Education Loan EMI Calculator",
      link: "",
    },
    {
      name: "Online Quizzing Festival",
      link: "",
    },
    {
      name: "Online Hackathon Festival",
      link: "",
    },
  ];

  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-logo">
              <img src={logo} alt="logo" height={"70px"} />
            </div>
            <p className="dash">
              Built with{" "}
              <span className="heart-icon">
                <AiFillHeart />
              </span>{" "}
              in India for the world
            </p>
            <h3>Stay Connected</h3>
            <div className="footer-contact-links">
              <a
                href="mailto:nayaksumaanyu@gmail.com"
                className="mail"
                target="_blank"
                rel="noreferrer"
              >
                <IoMailOutline />
                nayaksumaanyu@gmail.com
              </a>
              <a href="tel:9903273669" className="mail">
                <MdLocalPhone />
                +91-99032736669 <span> (Mon to Fri, 9 AM to 6 PM)</span>
              </a>
            </div>
            <div className="footer-social-links dash">
              <a
                href="https://www.instagram.com/unstop.world/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/unstop"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/Unstop.world"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://t.me/+ON15qceSy-IyZjY9"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://discord.com/invite/DvYWXNr4yR"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord />
              </a>
              <a
                href="https://twitter.com/Unstop_World"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/c/Unstop_World"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
            <h3>Stay Updated</h3>
            <p className="updated">
              We'll send you updates on the latest opportunities to showcase
              your talent and get hired and rewarded regularly.
            </p>
            <div className="newsletter">
              <a href="#" target="_blank" rel="noreferrer">
                Sign up for our newsletter
                <IoMdSend />
              </a>
            </div>
            <div className="footer-left-btns dash">
              <a href="#" className="btn" target="_blank" rel="noreferrer">
                Share Your Story Now
              </a>
              <a href="#" className="btn">
                <HiOutlineSpeakerphone />
                Publish Opportunity
              </a>
            </div>

            <p className="dash best-viewed">Made During StartUp Saga</p>
            <p className="copyright">
              Made with <AiFillHeart /> by Sumaanyu, Omesh, Srijan
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-right-top">
              <div className="footer-solution-product">
                <div className="footer-solutions">
                  <h4>Our solutions</h4>
                  <div className="footer-solutions-links links-cont">
                    {solutions.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-products">
                  <h4>Our products</h4>
                  <div className="footer-products-links links-cont">
                    {products.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-participate-apply">
                <div className="footer-participate">
                  <h4>participate</h4>
                  <div className="footer-participate-links links-cont">
                    {participate.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-apply">
                  <h4>apply</h4>
                  <div className="footer-apply-links links-cont">
                    {apply.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-learn-practice">
                <div className="footer-learn">
                  <h4>learn</h4>
                  <div className="footer-learn-links links-cont">
                    {learn.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-practice">
                  <h4>practice</h4>
                  <div className="footer-practice-links links-cont">
                    {practice.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-right-bottom">
              <div className="footer-properties">
                <div className="footer-products">
                  <h4>our properties</h4>
                  <div className="footer-products-links links-cont">
                    {properties.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-other-links">
                <div className="same-row-links">
                  <a href="" className="divider">
                    About Us
                  </a>
                  <a
                    href=""
                    className="divider"
                  >
                    Contact Us
                  </a>
                  <a
                    href=""
                    className="footer-careers"
                  >
                    Careers
                    <span className="hiring">We're hiring</span>
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href=""
                    className="divider"
                  >
                    Clientele
                  </a>
                  <a href="">
                    Partner With Us
                  </a>
                </div>
                <div className="same-row-links">
                  <a href="" className="divider">
                    Partners
                  </a>
                  <a href="" className="divider">
                    FAQs
                  </a>
                  <a href="">
                    Branding Guidelines
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href=""
                    className="divider"
                  >
                    Testimonials
                  </a>
                  <a href="">
                    Featured Partners
                  </a>
                </div>
                <div className="same-row-links">
                  <a href="" className="divider">
                    Terms & Conditions
                  </a>
                  <a href="">Privacy Policy</a>
                </div>
                <a href="">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom container">
          <div className="footer-bottom-left">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-payments-icon.svg"
              alt="payments assurance"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/payments-icon.svg"
              alt="payment methods"
            />
          </div>
          <div className="footer-bottom-right">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/gdpr-logo.png?d=300x300"
              alt="data protection"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2a5bdf94_iso_27001.svg"
              alt="information security"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2c0b51ff_iso_9001.svg"
              alt="iso certified"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
