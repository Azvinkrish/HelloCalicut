import React from 'react'

const Contact = () => {
  return (
    <>
    <section id="contact" ClassName="contact">
      <div ClassName="container">

        <div ClassName="section-title">
          <h2>Contact</h2>
          
        </div>

        <div ClassNameName="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div ClassName="info">
              <div ClassName="address">
                <i ClassName="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Calicut-kozhikode</p>
              </div>

              <div ClassName="email">
                <i ClassName="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>kragaswin.com</p>
              </div>

              <div ClassName="phone">
                <i ClassName="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91-8971212266</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
            </div>

          </div>

          <div ClassName="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="https://formspree.io/f/xvolwwyz" method="post" role="form" id="my-form" ClassName="php-email-form">
              <div ClassName="row">
                <div ClassName="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" ClassName="form-control" id="name" required>
                </div>
                <div ClassName="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" ClassName="form-control" name="email" id="email" required>
                </div>
              </div>
              <div ClassName="form-group">
                <label for="name">Subject</label>
                <input type="text" ClassName="form-control" name="subject" id="subject" required>
              </div>
              <div ClassName="form-group">
                <label for="name">Message</label>
                <textarea ClassName="form-control" name="message" rows="10" required></textarea>
              </div>
              <div ClassName="my-3">
                <div ClassName="loading">Loading</div> 
                <p id="my-form-status"></p>
                <div ClassName="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div ClassName="text-center"><button id="my-form-button" type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

    </>
  )
}

export default Contact