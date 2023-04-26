import React from "react";

function Reviews() {
  return (
    <>
      <section id="testimonials">
        <div class="container">
          <h2 class="heading">Testimonials</h2>
          <div class="row">
            <div class="column-2 mb">
              <div class="testimonial">
                <img
                  src="https://source.unsplash.com/EGVccebWodM/150x150"
                  alt="Author 1"
                  class="testimonial-author img-border"
                />
                <div class="testimonial-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nobis doloremque, non quas perferendis.
                  </p>
                  <p>
                    Et ut, quidem numquam maxime velit aliquid cumque
                    perspiciatis doloribus, consequuntur accusantium. Omnis,
                    magnam.
                  </p>
                  <footer>Sara Lookdail, writer</footer>
                </div>
              </div>
            </div>
            <div class="column-2 mb">
              <div class="testimonial">
                <img
                  src="https://source.unsplash.com/iFgRcqHznqg/150x150"
                  alt="Author 2"
                  class="testimonial-author img-border"
                />

                <div class="testimonial-body">
                  <p>
                    Deserunt laborum, vero similique hic consequatur quod in
                    maiores minus, quaerat sapiente facilis.
                  </p>
                  <p>
                    Reiciendis, debitis, iusto. Aliquam qui, libero nam soluta
                    tenetur adipisci voluptatum laborum architecto.
                  </p>
                  <footer>Max Tibody, CEO of Royal Group</footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
