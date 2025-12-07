import TestimonialCard from "./Testimonial/Testimonial";
import ProfilePic from "/images/profiles/p1-square.jpeg"
import "./Testimonials.css"
import {Swiper, SwiperSlide} from  "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import  { useRef } from "react";

function Testimonials() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const testimonialList = [
        {
            name: "Hanica Cabato",
            title: "Senior Software Engineer",
            relationship: "Dhoby's co-worker at Globe Group",
            photo: ProfilePic,
            testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa quaerat perferendis cumque soluta maxime assumenda! Vero, quae inventore. Excepturi minima, quam veniam atque est ut odio. Voluptate accusantium excepturi dolorem, ducimus libero optio ipsa, vitae eos, dolores debitis magnam deleniti dignissimos veritatis fugit! Fuga sint facilis voluptas magnam nihil mollitia sit pariatur dolore quas obcaecati odio, quaerat tempora quibusdam voluptate eius reiciendis recusandae inventore! Facere voluptatum nihil obcaecati eaque tempora excepturi corporis, maxime pariatur quasi tenetur sapiente necessitatibus animi impedit vitae quaerat deleniti provident perspiciatis in. Illo ducimus dolores officia optio voluptas iste provident ipsa, ut maiores pariatur odio praesentium assumenda eius aperiam porro iure repellat inventore vitae doloribus deleniti aut. Esse hic ad nobis tempore, cum dolorem in!"
        },
                {
            name: "Bea Salazar",
            title: "Full Stack Engineer",
            relationship: "Dhoby's co-worker at Globe Group",
            photo: ProfilePic,
            testimonial: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea saepe aliquam totam voluptates delectus itaque iste, autem nesciunt facilis. Repellat vero ipsam quo dolor ea dignissimos asperiores aspernatur laudantium deleniti itaque laborum obcaecati doloribus, sint officia consectetur fugit amet quam enim. Pariatur, cupiditate aperiam molestias dignissimos, libero quisquam vel aut explicabo qui tempora quaerat quibusdam ducimus deserunt! Est magnam deserunt molestiae dolore quisquam esse dolorum, molestias nobis a sunt aliquid, aut mollitia placeat ea obcaecati perferendis inventore odio voluptatem. Voluptate!"
        },
                {
            name: "Amanda Del Pilar",
            title: "Senior Software Engineer",
            relationship: "Dhoby's co-worker at Globe Group",
            photo: ProfilePic,
            testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos enim itaque facilis illo rerum exercitationem. Libero est quaerat, illo beatae aspernatur accusantium nesciunt. Dolor commodi magnam repellendus corrupti vel dolore impedit sint, sit possimus voluptate, officiis veniam ipsa harum dicta numquam corporis nesciunt ullam aliquid doloribus blanditiis perferendis necessitatibus qui. Aspernatur, nostrum. Consequuntur eveniet dicta ut cupiditate architecto nisi placeat amet quisquam cumque! Laborum deleniti corrupti distinctio quaerat! Facere non voluptatem enim nihil ut esse vel optio, recusandae atque exercitationem adipisci consequuntur, fugiat corporis error. Optio exercitationem animi, sed nesciunt tempore explicabo iusto nobis quam."
        },
                {
            name: "Patrick Pontawe",
            title: "Senior Software Engineer",
            relationship: "Dhoby's co-worker at Globe Group",
            photo: ProfilePic,
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aliquam voluptatem tempore dicta! Officiis voluptatum, eos facilis similique iste provident rerum non modi totam debitis repudiandae, repellendus facere quibusdam ut, accusamus voluptas sed fugiat! Modi optio maiores quas error commodi repellat eius enim nobis voluptas repellendus consectetur aut labore maxime voluptatibus, sequi ipsa expedita non quae corrupti inventore beatae necessitatibus tempora? Impedit earum cumque dicta blanditiis nostrum nisi, dolore voluptatum hic eligendi fugiat vero excepturi tempore fuga praesentium, laborum sequi unde accusamus voluptates facilis doloremque illo nihil distinctio iure. Perspiciatis nulla minima rerum dolorem quis accusamus eum minus aperiam totam, atque dolorum culpa ullam ea."
        },
                {
            name: "Andrei Gomez",
            title: "Scrum Master",
            relationship: "Dhoby's co-worker at Globe Group",
            photo: ProfilePic,
            testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos enim itaque facilis illo rerum exercitationem. Libero est quaerat, illo beatae aspernatur accusantium nesciunt. Dolor commodi magnam repellendus corrupti vel dolore impedit sint, sit possimus voluptate, officiis veniam ipsa harum dicta numquam corporis nesciunt ullam aliquid doloribus blanditiis perferendis necessitatibus qui. Aspernatur, nostrum. Consequuntur eveniet dicta ut cupiditate architecto nisi placeat amet quisquam cumque! Laborum deleniti corrupti distinctio quaerat! Facere non voluptatem enim nihil ut esse vel optio, recusandae atque exercitationem adipisci consequuntur, fugiat corporis error. Optio exercitationem animi, sed nesciunt tempore explicabo iusto nobis quam."
        },
                {
            name: "Catherine Mendoza",
            title: "Computer Operator",
            relationship: "Dhoby's co-worker at Change Healthcare",
            photo: ProfilePic,
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aliquam voluptatem tempore dicta! Officiis voluptatum, eos facilis similique iste provident rerum non modi totam debitis repudiandae, repellendus facere quibusdam ut, accusamus voluptas sed fugiat! Modi optio maiores quas error commodi repellat eius enim nobis voluptas repellendus consectetur aut labore maxime voluptatibus, sequi ipsa expedita non quae corrupti inventore beatae necessitatibus tempora? Impedit earum cumque dicta blanditiis nostrum nisi, dolore voluptatum hic eligendi fugiat vero excepturi tempore fuga praesentium, laborum sequi unde accusamus voluptates facilis doloremque illo nihil distinctio iure. Perspiciatis nulla minima rerum dolorem quis accusamus eum minus aperiam totam, atque dolorum culpa ullam ea."
        }
    ]


    return (
    <div className="testimonial-container">
        <Swiper
            effect={"coverflow"}
            grabCursor={false}
            allowTouchMove={true}
            centeredSlides={false}
            slidesPerGroup={2}
            slidesPerView={2}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 0,
                slideShadows: false,
            }}
            speed={1000}
            loop={true}
            initialSlide={1}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
                
            }}
            onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[Pagination, EffectCoverflow, Navigation]}
            style={{
                '--swiper-pagination-bottom': '200px'
            }}
            className="swiper-container"
            >

            {testimonialList.map((testimonial, index) => (
                <SwiperSlide key={index}>
                    <TestimonialCard {...testimonial} />
                </SwiperSlide>
            ))}

        <div className="slider-controler">
            <button className="btn-prev" ref={prevRef}>
                <ion-icon name="arrow-back-outline"></ion-icon>
            </button>
            <button className="btn-next" ref={nextRef}>
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
            <div className="swiper-pagination"></div>
        </div>
        </Swiper>
    </div>
    );
}


export default Testimonials;



// function TestimonialSlider({ testimonialList }) {
//     const prevRef = useRef(null);
//     const nextRef = useRef(null);

//     return (
//         <div className="swiper-container-wrapper"> 
//             <Swiper
//                 // ... other props ...
//                 modules={[Navigation]}
//                 // 2. Pass the refs to the navigation object
//                 navigation={{
//                     prevEl: prevRef.current,
//                     nextEl: nextRef.current,
//                 }}
//                 onBeforeInit={(swiper) => {
//                     // This is a common workaround to ensure refs are ready
//                     swiper.params.navigation.prevEl = prevRef.current;
//                     swiper.params.navigation.nextEl = nextRef.current;
//                 }}
//             >
//                 {testimonialList.map(/* ... */)}
//             </Swiper>
//             <div className="slider-controler">
//                 <div ref={prevRef} className="swiper-button-prev slider-arrow">
//                     <ion-icon name="arrow-back-outline"></ion-icon>
//                 </div>
//                 <div ref={nextRef} className="swiper-button-next slider-arrow">
//                     <ion-icon name="arrow-forward-outline"></ion-icon>
//                 </div>
//             </div>
//         </div>
//     );
// }