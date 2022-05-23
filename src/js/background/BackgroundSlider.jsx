import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";



export default function BackgroundSlider() {
    const BACKGROUND_API = 'https://picsum.photos/v2/list'

    const [slides, setSlides] = useState([])

    useEffect(() => {
        axios.get(BACKGROUND_API).then(
            response => { setSlides(response.data) }
        )
    },
        [BACKGROUND_API])

    const settings = {
        dots: false,
        arrows: false,
        arrowPrev: 'te',
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        fade: false,
        slidesToScroll: 1,
        centerMode: false,
        waitForAnimate: true

    };

    return (
        <Slider {...settings}>

            <div className="slide">
                <div className="slide-image"><img src={require('../images/compressor/21.jpg')} alt="" /></div>
                <div className="slide-body">
                    <div className="left">
                        <div className="slide-price">$2,799,00</div>
                        <div className="slide-name"> 31885 Circle Drive </div>
                        <div className="slide-address">Lagna Beach, CA 92651</div>
                        <div className="slide-buttons">
                            <button>Arrange Viewing</button>
                        </div>
                    </div>
                    <div className="right">

                        <div className="slide-options">
                            <div className="option">
                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 3C14.1347 2.9999 14.7457 3.24123 15.209 3.67504C15.6724 4.10885 15.9534 4.70265 15.995 5.336L16 5.5V8.05C16.5358 8.15959 17.021 8.4418 17.3811 8.85342C17.7413 9.26503 17.9565 9.78336 17.994 10.329L18 10.5V16.5C18.0002 16.6249 17.9537 16.7455 17.8695 16.8378C17.7853 16.9301 17.6696 16.9876 17.5452 16.9989C17.4207 17.0102 17.2966 16.9745 17.1972 16.8988C17.0977 16.8231 17.0303 16.7129 17.008 16.59L17 16.5V14H3V16.5C3.00023 16.6249 2.95367 16.7455 2.86949 16.8378C2.78531 16.9301 2.66961 16.9876 2.54518 16.9989C2.42074 17.0102 2.29659 16.9745 2.19717 16.8988C2.09775 16.8231 2.03026 16.7129 2.008 16.59L2 16.5V10.5C1.99988 9.92367 2.19889 9.36501 2.56335 8.91855C2.9278 8.47209 3.43532 8.16527 4 8.05V5.5C3.9999 4.86528 4.24123 4.25429 4.67504 3.79095C5.10885 3.32762 5.70265 3.04664 6.336 3.005L6.5 3H13.5ZM15.5 9H4.5C4.12727 8.99999 3.7679 9.13876 3.49189 9.38925C3.21589 9.63974 3.04303 9.98402 3.007 10.355L3 10.5V13H17V10.5C17 10.1273 16.8612 9.7679 16.6108 9.49189C16.3603 9.21589 16.016 9.04303 15.645 9.007L15.5 9ZM13.5 4H6.5C6.12712 4.00002 5.76761 4.13892 5.49158 4.38962C5.21555 4.64032 5.0428 4.98484 5.007 5.356L5 5.5V8H6V7.5C6 7.36739 6.05268 7.24021 6.14645 7.14645C6.24021 7.05268 6.36739 7 6.5 7H9C9.13261 7 9.25979 7.05268 9.35355 7.14645C9.44732 7.24021 9.5 7.36739 9.5 7.5V8H10.5V7.5C10.5 7.36739 10.5527 7.24021 10.6464 7.14645C10.7402 7.05268 10.8674 7 11 7H13.5C13.6326 7 13.7598 7.05268 13.8536 7.14645C13.9473 7.24021 14 7.36739 14 7.5V8H15V5.5C15 5.12727 14.8612 4.7679 14.6108 4.49189C14.3603 4.21589 14.016 4.04303 13.645 4.007L13.5 4Z" fill="black" />
                                </svg>
                                <p> <span>3</span> BEDROOMS</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M464 280H80V100C79.9814 93.2213 81.3076 86.5063 83.9018 80.2436C86.4959 73.981 90.3065 68.295 95.113 63.515L95.513 63.115C103.046 55.5934 112.717 50.5809 123.205 48.762C133.694 46.9432 144.488 48.4069 154.113 52.953C145.023 68.0669 141.244 85.7854 143.378 103.293C145.512 120.8 153.436 137.092 165.891 149.58L176.842 160.531L156.685 180.689L179.311 203.315L199.468 183.158L311.157 71.471L331.314 51.314L308.687 28.687L288.529 48.844L277.578 37.893C264.467 24.8183 247.183 16.7586 228.74 15.1183C210.296 13.4781 191.862 18.3613 176.649 28.917C160.607 18.7861 141.597 14.4126 122.74 16.5148C103.884 18.617 86.3038 27.0699 72.887 40.485L72.487 40.885C64.6994 48.63 58.5254 57.8426 54.3222 67.9897C50.119 78.1368 47.9701 89.0169 48 100V280H16V312H48V342.7C47.9993 345.28 48.4153 347.842 49.232 350.289L79 439.589C80.5886 444.37 83.6432 448.529 87.73 451.475C91.8169 454.421 96.728 456.004 101.766 456H114.666L103 496H136.333L148 456H356.1L368.1 496H401.5L389.5 456H410.23C415.269 456.005 420.181 454.422 424.268 451.476C428.356 448.53 431.411 444.371 433 439.589L462.766 350.289C463.583 347.842 463.999 345.28 464 342.7V312H496V280H464ZM188.52 60.52C197.336 51.7232 209.281 46.7829 221.736 46.7829C234.19 46.7829 246.135 51.7232 254.951 60.52L265.9 71.471L199.471 137.9L188.52 126.951C179.724 118.135 174.784 106.189 174.784 93.7355C174.784 81.2816 179.724 69.3362 188.52 60.52V60.52ZM432 341.4L404.468 424H107.532L80 341.4V312H432V341.4Z" fill="black" />
                                </svg>

                                <p> <span>3</span> BATHSS</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6H9C8.73478 6 8.48043 6.10536 8.29289 6.29289C8.10536 6.48043 8 6.73478 8 7V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18C9.26522 18 9.51957 17.8946 9.70711 17.7071C9.89464 17.5196 10 17.2652 10 17V14H12C13.0609 14 14.0783 13.5786 14.8284 12.8284C15.5786 12.0783 16 11.0609 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12H10V8H12C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19Z" fill="black" />
                                </svg>

                                <p> <span>4</span> PARKING</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V5C21 3.897 20.103 3 19 3H5C3.897 3 3 3.897 3 5ZM19.002 19H5V5H19L19.002 19Z" fill="black" />
                                    <path d="M15 12H17V7H12V9H15V12ZM12 15H9V12H7V17H12V15Z" fill="black" />
                                </svg>

                                <p> <span>2,719</span> SQFT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slide">
                <div className="slide-image"><img src={require('../images/compressor/5.jpg')} alt="" /></div>
                <div className="slide-body">
                    <div className="left">
                        <div className="slide-price">$2,799,00</div>
                        <div className="slide-name"> 31885 Circle Drive </div>
                        <div className="slide-address">Lagna Beach, CA 92651</div>
                        <div className="slide-buttons">
                            <button>Arrange Viewing</button>
                        </div>
                    </div>
                    <div className="right">

                        <div className="slide-options">
                            <div className="option">
                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 3C14.1347 2.9999 14.7457 3.24123 15.209 3.67504C15.6724 4.10885 15.9534 4.70265 15.995 5.336L16 5.5V8.05C16.5358 8.15959 17.021 8.4418 17.3811 8.85342C17.7413 9.26503 17.9565 9.78336 17.994 10.329L18 10.5V16.5C18.0002 16.6249 17.9537 16.7455 17.8695 16.8378C17.7853 16.9301 17.6696 16.9876 17.5452 16.9989C17.4207 17.0102 17.2966 16.9745 17.1972 16.8988C17.0977 16.8231 17.0303 16.7129 17.008 16.59L17 16.5V14H3V16.5C3.00023 16.6249 2.95367 16.7455 2.86949 16.8378C2.78531 16.9301 2.66961 16.9876 2.54518 16.9989C2.42074 17.0102 2.29659 16.9745 2.19717 16.8988C2.09775 16.8231 2.03026 16.7129 2.008 16.59L2 16.5V10.5C1.99988 9.92367 2.19889 9.36501 2.56335 8.91855C2.9278 8.47209 3.43532 8.16527 4 8.05V5.5C3.9999 4.86528 4.24123 4.25429 4.67504 3.79095C5.10885 3.32762 5.70265 3.04664 6.336 3.005L6.5 3H13.5ZM15.5 9H4.5C4.12727 8.99999 3.7679 9.13876 3.49189 9.38925C3.21589 9.63974 3.04303 9.98402 3.007 10.355L3 10.5V13H17V10.5C17 10.1273 16.8612 9.7679 16.6108 9.49189C16.3603 9.21589 16.016 9.04303 15.645 9.007L15.5 9ZM13.5 4H6.5C6.12712 4.00002 5.76761 4.13892 5.49158 4.38962C5.21555 4.64032 5.0428 4.98484 5.007 5.356L5 5.5V8H6V7.5C6 7.36739 6.05268 7.24021 6.14645 7.14645C6.24021 7.05268 6.36739 7 6.5 7H9C9.13261 7 9.25979 7.05268 9.35355 7.14645C9.44732 7.24021 9.5 7.36739 9.5 7.5V8H10.5V7.5C10.5 7.36739 10.5527 7.24021 10.6464 7.14645C10.7402 7.05268 10.8674 7 11 7H13.5C13.6326 7 13.7598 7.05268 13.8536 7.14645C13.9473 7.24021 14 7.36739 14 7.5V8H15V5.5C15 5.12727 14.8612 4.7679 14.6108 4.49189C14.3603 4.21589 14.016 4.04303 13.645 4.007L13.5 4Z" fill="black" />
                                </svg>
                                <p> <span>3</span> BEDROOMS</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M464 280H80V100C79.9814 93.2213 81.3076 86.5063 83.9018 80.2436C86.4959 73.981 90.3065 68.295 95.113 63.515L95.513 63.115C103.046 55.5934 112.717 50.5809 123.205 48.762C133.694 46.9432 144.488 48.4069 154.113 52.953C145.023 68.0669 141.244 85.7854 143.378 103.293C145.512 120.8 153.436 137.092 165.891 149.58L176.842 160.531L156.685 180.689L179.311 203.315L199.468 183.158L311.157 71.471L331.314 51.314L308.687 28.687L288.529 48.844L277.578 37.893C264.467 24.8183 247.183 16.7586 228.74 15.1183C210.296 13.4781 191.862 18.3613 176.649 28.917C160.607 18.7861 141.597 14.4126 122.74 16.5148C103.884 18.617 86.3038 27.0699 72.887 40.485L72.487 40.885C64.6994 48.63 58.5254 57.8426 54.3222 67.9897C50.119 78.1368 47.9701 89.0169 48 100V280H16V312H48V342.7C47.9993 345.28 48.4153 347.842 49.232 350.289L79 439.589C80.5886 444.37 83.6432 448.529 87.73 451.475C91.8169 454.421 96.728 456.004 101.766 456H114.666L103 496H136.333L148 456H356.1L368.1 496H401.5L389.5 456H410.23C415.269 456.005 420.181 454.422 424.268 451.476C428.356 448.53 431.411 444.371 433 439.589L462.766 350.289C463.583 347.842 463.999 345.28 464 342.7V312H496V280H464ZM188.52 60.52C197.336 51.7232 209.281 46.7829 221.736 46.7829C234.19 46.7829 246.135 51.7232 254.951 60.52L265.9 71.471L199.471 137.9L188.52 126.951C179.724 118.135 174.784 106.189 174.784 93.7355C174.784 81.2816 179.724 69.3362 188.52 60.52V60.52ZM432 341.4L404.468 424H107.532L80 341.4V312H432V341.4Z" fill="black" />
                                </svg>

                                <p> <span>3</span> BATHSS</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6H9C8.73478 6 8.48043 6.10536 8.29289 6.29289C8.10536 6.48043 8 6.73478 8 7V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18C9.26522 18 9.51957 17.8946 9.70711 17.7071C9.89464 17.5196 10 17.2652 10 17V14H12C13.0609 14 14.0783 13.5786 14.8284 12.8284C15.5786 12.0783 16 11.0609 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12H10V8H12C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19Z" fill="black" />
                                </svg>

                                <p> <span>4</span> PARKING</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V5C21 3.897 20.103 3 19 3H5C3.897 3 3 3.897 3 5ZM19.002 19H5V5H19L19.002 19Z" fill="black" />
                                    <path d="M15 12H17V7H12V9H15V12ZM12 15H9V12H7V17H12V15Z" fill="black" />
                                </svg>

                                <p> <span>2,719</span> SQFT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slide">
                <div className="slide-image"><img src={require('../images/compressor/1.jpg')} alt="" /></div>
                <div className="slide-body">
                    <div className="left">
                        <div className="slide-price">$2,799,00</div>
                        <div className="slide-name"> 31885 Circle Drive </div>
                        <div className="slide-address">Lagna Beach, CA 92651</div>
                        <div className="slide-buttons">
                            <button>Arrange Viewing</button>
                        </div>
                    </div>
                    <div className="right">

                        <div className="slide-options">
                            <div className="option">
                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 3C14.1347 2.9999 14.7457 3.24123 15.209 3.67504C15.6724 4.10885 15.9534 4.70265 15.995 5.336L16 5.5V8.05C16.5358 8.15959 17.021 8.4418 17.3811 8.85342C17.7413 9.26503 17.9565 9.78336 17.994 10.329L18 10.5V16.5C18.0002 16.6249 17.9537 16.7455 17.8695 16.8378C17.7853 16.9301 17.6696 16.9876 17.5452 16.9989C17.4207 17.0102 17.2966 16.9745 17.1972 16.8988C17.0977 16.8231 17.0303 16.7129 17.008 16.59L17 16.5V14H3V16.5C3.00023 16.6249 2.95367 16.7455 2.86949 16.8378C2.78531 16.9301 2.66961 16.9876 2.54518 16.9989C2.42074 17.0102 2.29659 16.9745 2.19717 16.8988C2.09775 16.8231 2.03026 16.7129 2.008 16.59L2 16.5V10.5C1.99988 9.92367 2.19889 9.36501 2.56335 8.91855C2.9278 8.47209 3.43532 8.16527 4 8.05V5.5C3.9999 4.86528 4.24123 4.25429 4.67504 3.79095C5.10885 3.32762 5.70265 3.04664 6.336 3.005L6.5 3H13.5ZM15.5 9H4.5C4.12727 8.99999 3.7679 9.13876 3.49189 9.38925C3.21589 9.63974 3.04303 9.98402 3.007 10.355L3 10.5V13H17V10.5C17 10.1273 16.8612 9.7679 16.6108 9.49189C16.3603 9.21589 16.016 9.04303 15.645 9.007L15.5 9ZM13.5 4H6.5C6.12712 4.00002 5.76761 4.13892 5.49158 4.38962C5.21555 4.64032 5.0428 4.98484 5.007 5.356L5 5.5V8H6V7.5C6 7.36739 6.05268 7.24021 6.14645 7.14645C6.24021 7.05268 6.36739 7 6.5 7H9C9.13261 7 9.25979 7.05268 9.35355 7.14645C9.44732 7.24021 9.5 7.36739 9.5 7.5V8H10.5V7.5C10.5 7.36739 10.5527 7.24021 10.6464 7.14645C10.7402 7.05268 10.8674 7 11 7H13.5C13.6326 7 13.7598 7.05268 13.8536 7.14645C13.9473 7.24021 14 7.36739 14 7.5V8H15V5.5C15 5.12727 14.8612 4.7679 14.6108 4.49189C14.3603 4.21589 14.016 4.04303 13.645 4.007L13.5 4Z" fill="black" />
                                </svg>
                                <p> <span>3</span> BEDROOMS</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M464 280H80V100C79.9814 93.2213 81.3076 86.5063 83.9018 80.2436C86.4959 73.981 90.3065 68.295 95.113 63.515L95.513 63.115C103.046 55.5934 112.717 50.5809 123.205 48.762C133.694 46.9432 144.488 48.4069 154.113 52.953C145.023 68.0669 141.244 85.7854 143.378 103.293C145.512 120.8 153.436 137.092 165.891 149.58L176.842 160.531L156.685 180.689L179.311 203.315L199.468 183.158L311.157 71.471L331.314 51.314L308.687 28.687L288.529 48.844L277.578 37.893C264.467 24.8183 247.183 16.7586 228.74 15.1183C210.296 13.4781 191.862 18.3613 176.649 28.917C160.607 18.7861 141.597 14.4126 122.74 16.5148C103.884 18.617 86.3038 27.0699 72.887 40.485L72.487 40.885C64.6994 48.63 58.5254 57.8426 54.3222 67.9897C50.119 78.1368 47.9701 89.0169 48 100V280H16V312H48V342.7C47.9993 345.28 48.4153 347.842 49.232 350.289L79 439.589C80.5886 444.37 83.6432 448.529 87.73 451.475C91.8169 454.421 96.728 456.004 101.766 456H114.666L103 496H136.333L148 456H356.1L368.1 496H401.5L389.5 456H410.23C415.269 456.005 420.181 454.422 424.268 451.476C428.356 448.53 431.411 444.371 433 439.589L462.766 350.289C463.583 347.842 463.999 345.28 464 342.7V312H496V280H464ZM188.52 60.52C197.336 51.7232 209.281 46.7829 221.736 46.7829C234.19 46.7829 246.135 51.7232 254.951 60.52L265.9 71.471L199.471 137.9L188.52 126.951C179.724 118.135 174.784 106.189 174.784 93.7355C174.784 81.2816 179.724 69.3362 188.52 60.52V60.52ZM432 341.4L404.468 424H107.532L80 341.4V312H432V341.4Z" fill="black" />
                                </svg>

                                <p> <span>3</span> BATHSS</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6H9C8.73478 6 8.48043 6.10536 8.29289 6.29289C8.10536 6.48043 8 6.73478 8 7V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18C9.26522 18 9.51957 17.8946 9.70711 17.7071C9.89464 17.5196 10 17.2652 10 17V14H12C13.0609 14 14.0783 13.5786 14.8284 12.8284C15.5786 12.0783 16 11.0609 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12H10V8H12C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19Z" fill="black" />
                                </svg>

                                <p> <span>4</span> PARKING</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V5C21 3.897 20.103 3 19 3H5C3.897 3 3 3.897 3 5ZM19.002 19H5V5H19L19.002 19Z" fill="black" />
                                    <path d="M15 12H17V7H12V9H15V12ZM12 15H9V12H7V17H12V15Z" fill="black" />
                                </svg>

                                <p> <span>2,719</span> SQFT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slide">
                <div className="slide-image"><img src={require('../images/compressor/2.jpg')} alt="" /></div>
                <div className="slide-body">
                    <div className="left">
                        <div className="slide-price">$2,799,00</div>
                        <div className="slide-name"> 31885 Circle Drive </div>
                        <div className="slide-address">Lagna Beach, CA 92651</div>
                        <div className="slide-buttons">
                            <button>Arrange Viewing</button>
                        </div>
                    </div>
                    <div className="right">

                        <div className="slide-options">
                            <div className="option">
                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 3C14.1347 2.9999 14.7457 3.24123 15.209 3.67504C15.6724 4.10885 15.9534 4.70265 15.995 5.336L16 5.5V8.05C16.5358 8.15959 17.021 8.4418 17.3811 8.85342C17.7413 9.26503 17.9565 9.78336 17.994 10.329L18 10.5V16.5C18.0002 16.6249 17.9537 16.7455 17.8695 16.8378C17.7853 16.9301 17.6696 16.9876 17.5452 16.9989C17.4207 17.0102 17.2966 16.9745 17.1972 16.8988C17.0977 16.8231 17.0303 16.7129 17.008 16.59L17 16.5V14H3V16.5C3.00023 16.6249 2.95367 16.7455 2.86949 16.8378C2.78531 16.9301 2.66961 16.9876 2.54518 16.9989C2.42074 17.0102 2.29659 16.9745 2.19717 16.8988C2.09775 16.8231 2.03026 16.7129 2.008 16.59L2 16.5V10.5C1.99988 9.92367 2.19889 9.36501 2.56335 8.91855C2.9278 8.47209 3.43532 8.16527 4 8.05V5.5C3.9999 4.86528 4.24123 4.25429 4.67504 3.79095C5.10885 3.32762 5.70265 3.04664 6.336 3.005L6.5 3H13.5ZM15.5 9H4.5C4.12727 8.99999 3.7679 9.13876 3.49189 9.38925C3.21589 9.63974 3.04303 9.98402 3.007 10.355L3 10.5V13H17V10.5C17 10.1273 16.8612 9.7679 16.6108 9.49189C16.3603 9.21589 16.016 9.04303 15.645 9.007L15.5 9ZM13.5 4H6.5C6.12712 4.00002 5.76761 4.13892 5.49158 4.38962C5.21555 4.64032 5.0428 4.98484 5.007 5.356L5 5.5V8H6V7.5C6 7.36739 6.05268 7.24021 6.14645 7.14645C6.24021 7.05268 6.36739 7 6.5 7H9C9.13261 7 9.25979 7.05268 9.35355 7.14645C9.44732 7.24021 9.5 7.36739 9.5 7.5V8H10.5V7.5C10.5 7.36739 10.5527 7.24021 10.6464 7.14645C10.7402 7.05268 10.8674 7 11 7H13.5C13.6326 7 13.7598 7.05268 13.8536 7.14645C13.9473 7.24021 14 7.36739 14 7.5V8H15V5.5C15 5.12727 14.8612 4.7679 14.6108 4.49189C14.3603 4.21589 14.016 4.04303 13.645 4.007L13.5 4Z" fill="black" />
                                </svg>
                                <p> <span>3</span> BEDROOMS</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M464 280H80V100C79.9814 93.2213 81.3076 86.5063 83.9018 80.2436C86.4959 73.981 90.3065 68.295 95.113 63.515L95.513 63.115C103.046 55.5934 112.717 50.5809 123.205 48.762C133.694 46.9432 144.488 48.4069 154.113 52.953C145.023 68.0669 141.244 85.7854 143.378 103.293C145.512 120.8 153.436 137.092 165.891 149.58L176.842 160.531L156.685 180.689L179.311 203.315L199.468 183.158L311.157 71.471L331.314 51.314L308.687 28.687L288.529 48.844L277.578 37.893C264.467 24.8183 247.183 16.7586 228.74 15.1183C210.296 13.4781 191.862 18.3613 176.649 28.917C160.607 18.7861 141.597 14.4126 122.74 16.5148C103.884 18.617 86.3038 27.0699 72.887 40.485L72.487 40.885C64.6994 48.63 58.5254 57.8426 54.3222 67.9897C50.119 78.1368 47.9701 89.0169 48 100V280H16V312H48V342.7C47.9993 345.28 48.4153 347.842 49.232 350.289L79 439.589C80.5886 444.37 83.6432 448.529 87.73 451.475C91.8169 454.421 96.728 456.004 101.766 456H114.666L103 496H136.333L148 456H356.1L368.1 496H401.5L389.5 456H410.23C415.269 456.005 420.181 454.422 424.268 451.476C428.356 448.53 431.411 444.371 433 439.589L462.766 350.289C463.583 347.842 463.999 345.28 464 342.7V312H496V280H464ZM188.52 60.52C197.336 51.7232 209.281 46.7829 221.736 46.7829C234.19 46.7829 246.135 51.7232 254.951 60.52L265.9 71.471L199.471 137.9L188.52 126.951C179.724 118.135 174.784 106.189 174.784 93.7355C174.784 81.2816 179.724 69.3362 188.52 60.52V60.52ZM432 341.4L404.468 424H107.532L80 341.4V312H432V341.4Z" fill="black" />
                                </svg>

                                <p> <span>3</span> BATHSS</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6H9C8.73478 6 8.48043 6.10536 8.29289 6.29289C8.10536 6.48043 8 6.73478 8 7V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18C9.26522 18 9.51957 17.8946 9.70711 17.7071C9.89464 17.5196 10 17.2652 10 17V14H12C13.0609 14 14.0783 13.5786 14.8284 12.8284C15.5786 12.0783 16 11.0609 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12H10V8H12C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19Z" fill="black" />
                                </svg>

                                <p> <span>4</span> PARKING</p>
                            </div>

                            <div className="option">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V5C21 3.897 20.103 3 19 3H5C3.897 3 3 3.897 3 5ZM19.002 19H5V5H19L19.002 19Z" fill="black" />
                                    <path d="M15 12H17V7H12V9H15V12ZM12 15H9V12H7V17H12V15Z" fill="black" />
                                </svg>

                                <p> <span>2,719</span> SQFT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {slides.map((item) => {

                return <div className="slide" key={item.id}>
                    <div className="slide-image"><img src={item.download_url} alt="" /></div>
                    <div className="slide-body">
                        <div className="left">
                            <div className="slide-price">$2,799,00</div>
                            <div className="slide-name"> {item.author} </div>
                            <div className="slide-address">Lagna Beach, CA 92651</div>
                            <div className="slide-buttons">
                                <button>Arrange Viewing</button>
                            </div>
                        </div>
                        <div className="right">

                            <div className="slide-options">
                                <div className="option">
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 3C14.1347 2.9999 14.7457 3.24123 15.209 3.67504C15.6724 4.10885 15.9534 4.70265 15.995 5.336L16 5.5V8.05C16.5358 8.15959 17.021 8.4418 17.3811 8.85342C17.7413 9.26503 17.9565 9.78336 17.994 10.329L18 10.5V16.5C18.0002 16.6249 17.9537 16.7455 17.8695 16.8378C17.7853 16.9301 17.6696 16.9876 17.5452 16.9989C17.4207 17.0102 17.2966 16.9745 17.1972 16.8988C17.0977 16.8231 17.0303 16.7129 17.008 16.59L17 16.5V14H3V16.5C3.00023 16.6249 2.95367 16.7455 2.86949 16.8378C2.78531 16.9301 2.66961 16.9876 2.54518 16.9989C2.42074 17.0102 2.29659 16.9745 2.19717 16.8988C2.09775 16.8231 2.03026 16.7129 2.008 16.59L2 16.5V10.5C1.99988 9.92367 2.19889 9.36501 2.56335 8.91855C2.9278 8.47209 3.43532 8.16527 4 8.05V5.5C3.9999 4.86528 4.24123 4.25429 4.67504 3.79095C5.10885 3.32762 5.70265 3.04664 6.336 3.005L6.5 3H13.5ZM15.5 9H4.5C4.12727 8.99999 3.7679 9.13876 3.49189 9.38925C3.21589 9.63974 3.04303 9.98402 3.007 10.355L3 10.5V13H17V10.5C17 10.1273 16.8612 9.7679 16.6108 9.49189C16.3603 9.21589 16.016 9.04303 15.645 9.007L15.5 9ZM13.5 4H6.5C6.12712 4.00002 5.76761 4.13892 5.49158 4.38962C5.21555 4.64032 5.0428 4.98484 5.007 5.356L5 5.5V8H6V7.5C6 7.36739 6.05268 7.24021 6.14645 7.14645C6.24021 7.05268 6.36739 7 6.5 7H9C9.13261 7 9.25979 7.05268 9.35355 7.14645C9.44732 7.24021 9.5 7.36739 9.5 7.5V8H10.5V7.5C10.5 7.36739 10.5527 7.24021 10.6464 7.14645C10.7402 7.05268 10.8674 7 11 7H13.5C13.6326 7 13.7598 7.05268 13.8536 7.14645C13.9473 7.24021 14 7.36739 14 7.5V8H15V5.5C15 5.12727 14.8612 4.7679 14.6108 4.49189C14.3603 4.21589 14.016 4.04303 13.645 4.007L13.5 4Z" fill="black" />
                                    </svg>
                                    <p> <span>3</span> BEDROOMS</p>
                                </div>

                                <div className="option">
                                    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M464 280H80V100C79.9814 93.2213 81.3076 86.5063 83.9018 80.2436C86.4959 73.981 90.3065 68.295 95.113 63.515L95.513 63.115C103.046 55.5934 112.717 50.5809 123.205 48.762C133.694 46.9432 144.488 48.4069 154.113 52.953C145.023 68.0669 141.244 85.7854 143.378 103.293C145.512 120.8 153.436 137.092 165.891 149.58L176.842 160.531L156.685 180.689L179.311 203.315L199.468 183.158L311.157 71.471L331.314 51.314L308.687 28.687L288.529 48.844L277.578 37.893C264.467 24.8183 247.183 16.7586 228.74 15.1183C210.296 13.4781 191.862 18.3613 176.649 28.917C160.607 18.7861 141.597 14.4126 122.74 16.5148C103.884 18.617 86.3038 27.0699 72.887 40.485L72.487 40.885C64.6994 48.63 58.5254 57.8426 54.3222 67.9897C50.119 78.1368 47.9701 89.0169 48 100V280H16V312H48V342.7C47.9993 345.28 48.4153 347.842 49.232 350.289L79 439.589C80.5886 444.37 83.6432 448.529 87.73 451.475C91.8169 454.421 96.728 456.004 101.766 456H114.666L103 496H136.333L148 456H356.1L368.1 496H401.5L389.5 456H410.23C415.269 456.005 420.181 454.422 424.268 451.476C428.356 448.53 431.411 444.371 433 439.589L462.766 350.289C463.583 347.842 463.999 345.28 464 342.7V312H496V280H464ZM188.52 60.52C197.336 51.7232 209.281 46.7829 221.736 46.7829C234.19 46.7829 246.135 51.7232 254.951 60.52L265.9 71.471L199.471 137.9L188.52 126.951C179.724 118.135 174.784 106.189 174.784 93.7355C174.784 81.2816 179.724 69.3362 188.52 60.52V60.52ZM432 341.4L404.468 424H107.532L80 341.4V312H432V341.4Z" fill="black" />
                                    </svg>

                                    <p> <span>3</span> BATHSS</p>
                                </div>

                                <div className="option">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 6H9C8.73478 6 8.48043 6.10536 8.29289 6.29289C8.10536 6.48043 8 6.73478 8 7V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18C9.26522 18 9.51957 17.8946 9.70711 17.7071C9.89464 17.5196 10 17.2652 10 17V14H12C13.0609 14 14.0783 13.5786 14.8284 12.8284C15.5786 12.0783 16 11.0609 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12H10V8H12C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19Z" fill="black" />
                                    </svg>

                                    <p> <span>4</span> PARKING</p>
                                </div>

                                <div className="option">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V5C21 3.897 20.103 3 19 3H5C3.897 3 3 3.897 3 5ZM19.002 19H5V5H19L19.002 19Z" fill="black" />
                                        <path d="M15 12H17V7H12V9H15V12ZM12 15H9V12H7V17H12V15Z" fill="black" />
                                    </svg>

                                    <p> <span>2,719</span> SQFT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </Slider>
    );
}