import "./Testimonial.css"

function TestimonialCard({name, title, relationship, photo, testimonial}) {
    return(
        <div className="testimonial-card">
            <img className="colleague-photo" src={photo} alt="Colleague" />
            <div className="colleague-info">
                <div className="colleage-header">
                    <h3 className="colleague-name">{name}</h3>
                    <h3 className="colleague-title">{title}</h3> 
                </div>
                <h4 className="colleague-relationship">{relationship}</h4>
                <p className="colleague-testimonial">{testimonial}</p>
            </div>
        </div>
    )
}


export default TestimonialCard;