<template>
  <div>
    <!-- Footer -->
    <footer class="footer text-center">
      <div class="container">
        <ul class="list-inline mt-3">
          <!-- github -->
          <li class="list-inline-item mx-3">
            <a href="https://github.com/iteccxzy/" target="_blank"
              ><img src="../assets/github.webp" alt="github"
            /></a>
          </li>
          <!-- mail -->
          <li class="list-inline-item mx-3">
            <span>Contact: hello@cuarentech.com</span>
          </li>
          <!-- copyright -->
          <li class="list-inline-item mx-3">
            <img
              src="../assets/favicon.png"
              alt=""
              style="height: 25px"
              class="rounded"
            />
            <span class="ml-2">Copyright &copy; cuarentech.com 2020</span>
          </li>
        </ul>
      </div>
    </footer>

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded js-scroll-trigger" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>


<style scoped>
img {
  height: 50px;
  opacity: 0.8;
}
span {
  font-size: 1rem;
  color: rgb(255, 255, 255);
}
a img:hover {
  padding: 1px;
  opacity: 1;
}
footer {
  background: #39545f;
}
</style>