<template>
  <div class="container">
    <div class="row justify-content-center">
      <!-- www.courseview.store -->
      <div id="courses" class="col-8 mt-1">
        <div class="card mb-3">
          <img
            src="../assets/portfolio-1.jpg"
            class="card-img-top p-3"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Course Search</h5>
            <p class="card-text">
              Search engine for development courses and programming languages.
              <a href="http://www.courseview.store" target="_blank"
                >www.courseview.store</a
              >
            </p>
          </div>
        </div>
      </div>
      <!-- www.eventview.store -->
      <div id="events" class="col-8 my-1">
        <div class="card mb-3">
          <img
            src="../assets/portfolio-2.jpg"
            class="card-img-top p-3"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Events Manager</h5>
            <p class="card-text">
              Allows you to manage your video call events by categories and
              users and more.
              <a href="http://www.eventview.store/" target="_blank"
                >www.eventview.store</a
              >
            </p>
          </div>
        </div>
      </div>
      <!-- www.ticketview.store -->
      <div id="tickets" class="col-8 my-1">
        <div class="card mb-3">
          <img
            src="../assets/portfolio-3.jpg"
            class="card-img-top p-3"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Tickets admin</h5>
            <p class="card-text">
              Manage your clients' shifts easily.
              <a href="http://www.ticketview.store/customer" target="_blank"
                >www.ticketview.store</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolio",
};
</script>

<style scoped>
.card {
  background-image: url("../assets/slant-right.png");
}
</style>
