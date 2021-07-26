<script>
  export let navlists = [];
</script>

<div>
  <nav class=" navbar navbar-light bg-light">
    <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
      <button
        class="navbar-toggle navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
        <div class="menu">MENU</div>
      </button>
    </div>

    <div class="navbarNav">
      {#each navlists as list}
        <span class="nav-item">
          <a class="nav-link light-color" href={list.url}>{list.label}</a>
        </span>
      {/each}
    </div>
  </nav>
</div>

<style>
  #nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .navbar {
    padding: 0 20px !important;
    width: 100%;
  }
  .menu {
    font-size: 0.6rem;
    font-weight: bold;
    /* margin-left: -30px !important; */
  }

  .navbar-toggler {
    border: none;
    margin-left: -30px !important;
  }
  /* .navbar-toggler {
    left: 0;
    border: none;
    margin-left: -2px;
    margin-left: -10px !important;
  }
  .navbar-toggler-icon {
    margin-left: -30px !important;
    font-weight: weight;
  } */

  .navbar-nav li a {
    font-weight: 600;
    text-transform: uppercase;
    float: right;
    border: 2px solid red;
    text-align: left;
  }
</style>
