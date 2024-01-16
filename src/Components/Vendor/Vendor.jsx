import React from 'react'
import '../Style/style.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Vendor = () => {

    const options = {
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: false,
        loop: true,
        margin: 30,
        nav: false,
        navText: false,
        responsiveclassName: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 5
            }
        }
    };

    return (
        <div class="container-fluid py-5">
            <div class="row px-xl-5">
                <div class="col">
                    <OwlCarousel className='owl-theme vendor-carousel' {...options}>
                        <div class='item'>
                            <div class="bg-light p-4">
                                <img src="./images/vendor-1.jpg" alt="" />
                            </div>
                        </div>
                        <div class='item'>
                            <div class="bg-light p-4">
                                <img src="./images/vendor-2.jpg" alt="" />
                            </div>
                        </div>
                        <div class='item'>
                            <div class="bg-light p-4">
                                <img src="./images/vendor-3.jpg" alt="" />
                            </div>
                        </div>
                        <div class='item'>
                            <div class="bg-light p-4">
                                <img src="./images/vendor-4.jpg" alt="" />
                            </div>
                        </div>
                        <div class='item'>
                            <div class="bg-light p-4">
                                <img src="./images/vendor-5.jpg" alt="" />
                            </div>
                        </div>
                        <div class='item'>
                            <div class="bg-light p-4">
                                <img src="./images/vendor-6.jpg" alt="" />
                            </div>
                        </div>
                        <div class='item'>
                            <div class="bg-light p-4">
                                <img src="./images/vendor-7.jpg" alt="" />
                            </div>
                        </div>
                        <div class='item'>
                            <div class="bg-light p-4">
                                <img src="./images/vendor-8.jpg" alt="" />
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Vendor