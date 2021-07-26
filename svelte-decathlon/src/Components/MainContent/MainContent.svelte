<script>
  export let mainlist = {};
</script>

<div class="container-fluid">
  <div class="row ">
    <div class="col-md-5 card ">
      <div class="card-body ">
        <h5 class="card-title">{mainlist.HEADING}</h5>
        <p class="Rectangle" />
        <p class="card-text">
          {mainlist.SUBHEADING}
        </p>

        <a href="#" class="btn">{mainlist.BUTTONCONTENT}</a>
      </div>
    </div>

    <div class="col-md-7">
      <img src={mainlist.MOB_IMG} alt="" class="img-fluid" />
    </div>
  </div>
</div>

<style>
  .card {
    font-family: "Roboto Condensed", "Arial Narrow", sans-serif;
    border: none;
  }
  .card-title {
    color: #007dbc;
    font-size: 4rem;
    font-weight: bold;
    margin: 13%;
    font-style: italic;
  }
  .card-text {
    font-weight: bold;
    margin: 2% 13%;
    font-size: 1.3rem;
  }
  .btn {
    background-color: #ffea28;
    font-weight: bold;
    color: black;
    margin: 2% 15%;
  }
  .Rectangle {
    height: 1px;
    /* margin: 16px 40px 16px 0; */
    margin: 2% 13%;
    background-image: linear-gradient(
      to right,
      #0072b5 0%,
      rgba(0, 114, 181, 0) 100%
    );
  }

  /* Small devices (landscape phones, 544px and up) */
  @media (min-width: 320px) {
    .card-title {
      font-size: 1.8rem;
    }
    .card-text {
      font-size: 0.5rem;
    }
  }

  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
  @media (min-width: 768px) {
    .card-title {
      font-size: 2.3rem;
    }
    .card-text {
      font-size: 1rem;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .card-title {
      font-size: 4rem;
    }
    .card-text {
      font-size: 1.5rem;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .card-title {
      font-size: 7.8rem;
    }
    .card-text {
      font-size: 1.7rem;
    } /*1rem = 16px*/
  }
</style>
