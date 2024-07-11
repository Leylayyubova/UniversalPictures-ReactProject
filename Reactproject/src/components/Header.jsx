import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Header = () => {
    return (
        <>
            <header className="universal">
                <div className="container">
                    <div className="logo">
                        <img src="https://www.universalpictures.com/assets/img/universalglobe.png" alt="" />
                    </div>
                    <div className="all-menu">
                        <ul className="main-menu">
                            <li><a href="">Movies</a></li>
                            <li><a href="">Trailers</a></li>
                            <li><a href="">News & Press</a></li>
                            <img src="https://www.universalpictures.com/assets/img/menu-icons/icon-more.png" alt="circle" />
                        </ul>
                        <div className="social-menu">
                            <BsTwitterX />
                            <FaFacebook />
                            <FaInstagram />
                            <FaYoutube />
                            <FaTiktok />
                            <BsSnapchat />
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="main-stage">
                    <div className="container">
                        <div className="image">
                            <img src="https://movies.universalpictures.com/media/thefallguy-slider-mobile-1080x793-664ccb90cab44-1.jpg" alt="" />
                        </div>
                        <div className="all-movie">
                        <div className="banner">
                            <img src="https://movies.universalpictures.com/media/03-fg-dm-thumbnail-803x519-mlr-f03-030824-65eb63a4571ce-1.jpg" alt="" />
                            <div className="content">
                                <h4>The Fall&Guy</h4>
                                <p>Watch At Home</p>
                            </div>
                        </div>
                        <div className="banner">
                            <img src="https://movies.universalpictures.com/media/04-dm4-dm-thumbnail-803x519-rr-f01-042624-663a431438230-1.jpg" alt="" />
                            <div className="content">
                                <h4>Despicable Me 4</h4>
                                <p>In Theaters Now</p>
                            </div>
                        </div>
                        <div className="banner">
                            <img src="https://movies.universalpictures.com/media/02-tws-dm-thumbnail-803x519-km-f01-020924-65c966aa91be8-1.jpg" alt="" />
                            <div className="content">
                                <h4>Twisters</h4>
                                <p>In Theaters July 19
                                </p>
                            </div>
                        </div>
                        <div className="banner">
                            <img src="https://movies.universalpictures.com/media/02-sne-dm-thumbnail-803x519-ew-f01-061124-6671399d66c2a-1.jpg" alt="" />
                            <div className="content">
                                <h4>Speak No Evil</h4>
                                <p>Only in Theaters September 13
                                </p>
                            </div>
                        </div>
                        <div className="banner">
                            <img src="https://movies.universalpictures.com/media/02-wrb-dm-thumbnail-803x519-sl-f01-030124-65e7408d48592-1.jpg" alt="" />
                            <div className="content">
                                <h4>The Wild Robot</h4>
                                <p> In Theaters September 27
                                </p>
                            </div>
                        </div>
                        <div className="banner">
                            <img src="https://movies.universalpictures.com/media/02-wkd-dm-thumbnail-803x519-sl-f01-050324-66438f87f2ff8-1.jpg" alt="" />
                            <div className="content">
                                <h4>Wicked</h4>
                                <p>IN THEATERS NOVEMBER 22</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="movie">
                    <div className="container">
                        <div className="image">
                            <img src="https://www.universalpictures.com/media/pktv-00082273-000246022-666c7621ba00d.jpg" alt="" />
                        </div>
                        <div className="watch">
                            <img src="https://www.universalpictures.com/assets/img/page-home/signup-background.jpg" alt="" />
                            <div className="info-box">
                                <h2>Be the First to Know</h2>
                                <p>Sign up now for exclusive giveaways, advance screenings, sneak-peeks and much, much more.
                                </p>
                                <form action="">
                                    <input type="text" placeholder="Your email address" />
                                    <FaArrowCircleRight />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="news">
                    <div className="container">
                        <div className="cards">
                            <div className="card">
                                <p>Trolls Band Together Brings the Trolls Magic to Life with Products, Games, Experiences, and&More</p>
                                <span>November 16, 2023 | via www.nbcuniversal.com</span>
                                <a href="">Keep Reading</a>
                            </div>
                            <div className="card">
                                <p>Next Gen 2023: The Hollywood Reporter’s 35 Rising Executives 35 and Under ft. Michelle Momplaisir, Kelsey Balance and Megan&Macmillan</p>
                                <span>November 15, 2023 | via www.hollywoodreporter.com</span>
                                <a href="">Keep Reading</a>
                            </div>
                            <div className="card">
                                <p>Donna Langley, Veronika Kwan Vandenberg and Pearlena Igbokwe Named to Variety Power of Women in Hollywood&2023</p>
                                <span>November 15, 2023 | via variety.com</span>
                                <a href="">Keep Reading</a>
                            </div>
                            <div className="card">
                                <p>Focus Features Lands U.S. Rights To Edward Berger’s Papal Thriller ‘Conclave’ Starring Ralph Fiennes And Stanley&Tucci</p>
                                <span>November 15, 2023 | via variety.com</span>
                                <a href="">Keep Reading</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="promomodule">
                    <div className="container">
                        <div className="image">
                            <img src="https://www.universalpictures.com/media/pktv-00082610-000246461-6679a5240840c.jpg" alt="" />
                            <img src="https://www.universalpictures.com/media/pktv-00077561-000238269-65f366c2de92d.jpg" alt="" />
                        </div>
                    </div>
                </section>
            </main>
            <footer className="trailers">
                <div className="container">
                    <div className="image">
                        <img src="https://www.universalpictures.com/assets/svg/universallogo.svg" alt="" />
                    </div>
                    <div className="social">
                        <BsTwitterX />
                        <FaFacebook />
                        <FaInstagram />
                        <FaYoutube />
                        <FaTiktok />
                        <BsSnapchat />
                        <p>©2024 Universal Pictures</p>
                    </div>
                </div>
                <div className="about">
                    <ul>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Trailers</a></li>
                        <li><a href="">News & Press</a></li>
                    </ul>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">NBCUniversal</a></li>
                        <li><a href="">Home Entertainment</a></li>
                        <li><a href="">Universal Products & Experiences</a></li>
                        <li><a href="">Global Talent Development and Inclusion</a></li>
                        <li><a href="">Universal Studios Parks & Resorts</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Sitemap</a></li>
                    </ul>
                    <ul>
                        <li><a href=""Terms of Service></a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Cookie Notice</a></li>
                        <li><a href="">Ad Choices</a></li>
                        <li><a href="">CA Notice</a></li>
                        <li><a href="">Canada</a></li>
                        <li><a href="">International</a></li>
                        <li><a href="">ParentalGuide.com</a></li>
                        <li><a href="">FilmRatings.com</a></li>
                        <li><a href="">MPAA.org</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Tobacco Policy</a></li>
                        <li><a href="">YouTube Terms of Service</a></li>
                        <li><a href="">Google Privacy Policy</a></li>
                    </ul>
                </div>
            </footer>

        </>
    )
}
export default Header;