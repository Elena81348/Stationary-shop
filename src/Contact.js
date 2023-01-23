
import image from './geolocation.png'
import imageTwo from './calendar.png'
import imageMail from './mail.png'

function Contact(){
    return <div>
    <div className="container">
        <h1>Contact</h1>
    </div>
    <div className="contact">
        <p> <img src={image} width='30px' alt='address'/> 04150, Leipzig, Golis-Mitte,5</p>
        <p> <img src={imageTwo} width='25px' alt='timetable'/>Mon-Fri: from 09:00 to 18:00</p>
        <p>Sat-Sun: from 10:00 to 17:30</p>
        <p> 📞 <a href="+4915156759867">+4915156759867</a></p>
        <p> 📞 <a href="+4934187934274">+4934187934274</a></p>
        <p><img src={imageMail} width='25px' alt='mail'/><a href="mailto:akvarel@gmail.com">akvarel@gmail.com</a> </p>
    </div>
    </div>
}
export default Contact;