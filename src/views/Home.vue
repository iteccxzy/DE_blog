<template>
  <div>
    <!-- Header ----------------------------------->

    <header class="masthead d-flex">
      <div class="container text-center my-auto">
        <h1 class="mb-1" style="color: rgb(21, 72, 88)">Cuarentech Dev</h1>
        <h4 class="mb-5" style="color: rgb(21, 72, 88)">
          <em>building web solutions</em>
        </h4>
        <router-link
          :to="{
            name: 'About',
          }"
          class="btn btn-primary btn-xl js-scroll-trigger"
        >
          Find Out More</router-link
        >
      </div>
      <div class="overlay"></div>
    </header>

    <!-- Services ------------------------------------------------->
    <section
      class="content-section bg-primary text-white text-center"
      id="services"
    >
      <div class="container">
        <div class="content-section-heading">
          <h2 class="mb-5">What We Offer</h2>
        </div>
        <div class="row">
          <!-- web solutions -->
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <img
                src="../assets/web.png"
                alt=""
                style="height: 60%"
                class="mb-2 rounded"
              />
            </span>
            <h4>
              <strong>Web solutions</strong>
            </h4>
          </div>
          <!-- graphic design -->
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <img
                src="../assets/design.png"
                alt=""
                style="height: 60%"
                class="mb-2 rounded"
              />
            </span>
            <h4>
              <strong>Graphic design</strong>
            </h4>
          </div>
          <!-- trainings -->
          <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <img
                src="../assets/zoom.png"
                alt=""
                style="width: 60%; height: 60px"
                class="mb-2"
              />
            </span>
            <h4>
              <strong>Tech trainings</strong>
            </h4>
          </div>
          <!-- agency -->
          <div class="col-lg-3 col-md-6">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <img
                src="../assets/agency.png"
                alt=""
                style="width: 60%; height: 60px"
                class="mb-2"
              />
            </span>
            <h4>
              <strong>Digital agency</strong>
            </h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio ----------------------------------------------------->
    <section class="content-section" id="portfolio">
      <div class="container">
        <div class="content-section-heading text-center">
          <h2 class="mb-5">Recent Projects</h2>
        </div>
        <div class="row no-gutters">
          <!-- Course Search -->
          <div class="col-lg-6 p-3">
            <a
              class="portfolio-item rounded"
              href="/portfolio/#courses"
              target="blank"
            >
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Course Search</div>
                  <p class="mb-0">Trace your road of programming learning</p>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio-1.jpg" alt="" />
            </a>
          </div>
          <!-- Events Manager -->
          <div class="col-lg-6 p-3">
            <a
              class="portfolio-item rounded rounded"
              href="/portfolio/#events"
              target="blank"
            >
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Events Manager</div>
                  <p class="mb-0">
                    Admin meetings and video calls in a simple way
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio-2.jpg" alt="" />
            </a>
          </div>
          <!-- ticket  -->
          <div class="col-lg-6 p-3">
            <a
              class="portfolio-item rounded"
              href="/portfolio/#tickets"
              target="blank"
            >
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Get your ticket</div>
                  <p class="mb-0">Manage shifts for your clients</p>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio-3.jpg" alt="" />
            </a>
          </div>
          <!-- training -->
          <div class="col-lg-6 p-3">
            <a
              class="portfolio-item rounded"
              href="/portfolio/#campus"
              target="blank"
            >
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Get a training</div>
                  <p class="mb-0">Get ready in a programming language</p>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio-4.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to skills ----------------------------------------------->
    <section
      class="content-section bg-primary text-white"
      style="padding-top: 3.5rem; padding-bottom: 5.5rem"
    >
      <div class="container text-center">
        <h2 class="mb-4">Skills</h2>

        <ul class="list-inline mb-5">
          <li class="list-inline-item">
            <img
              src="../assets/aws.png"
              alt=""
              style="width: 100px; height: 100px"
              class="p-3 bg-white rounded m-2"
            />
          </li>
          <li class="list-inline-item">
            <img
              src="../assets/python.png"
              alt=""
              style="width: 100px; height: 100px"
              class="p-3 bg-white rounded m-2"
            />
          </li>
          <li class="list-inline-item">
            <img
              src="../assets/django.png"
              alt=""
              style="width: 200px; height: 100px"
              class="p-3 bg-white rounded m-2"
            />
          </li>

          <li class="list-inline-item">
            <img
              src="../assets/node.png"
              alt=""
              style="width: 170px; height: 100px"
              class="p-3 bg-white rounded m-2"
            />
          </li>
          <li class="list-inline-item">
            <img
              src="../assets/js.png"
              alt=""
              style="width: 100px; height: 100px"
              class="p-3 bg-white rounded m-2"
            />
          </li>
          <li class="list-inline-item">
            <img
              src="../assets/vue.png"
              alt=""
              style="width: 100px; height: 100px"
              class="p-3 bg-white rounded m-2"
            />
          </li>

          <li class="list-inline-item">
            <img
              src="../assets/mongo.png"
              alt=""
              style="width: 100px; height: 100px"
              class="p-3 bg-white rounded m-2"
            />
          </li>
        </ul>
      </div>
    </section>

    <!-- Map -------------------------------------------------------------->
    <div id="contact" class="map">
      <iframe
        src=""
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>


  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
};
</script>
