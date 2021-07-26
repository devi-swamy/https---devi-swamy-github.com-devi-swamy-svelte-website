<script>
  export let banner = "";
</script>

<div class="container-fluid">
  <div class="row">
    <div class=" col-xl-12 col-md-12 col-lg-12 col-sm-12 banner">
      <img src={banner} alt="" class="imgwidth" />
    </div>
  </div>
</div>

<style>
  .container-fluid {
    height: 20%;
  }
  .banner {
    width: 90%;
  }
  .imgwidth {
    width: 90%;

    margin-left: 5%;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .imgwidth {
      width: 110%;

      margin-right: 5%;
    }
  }
</style>
