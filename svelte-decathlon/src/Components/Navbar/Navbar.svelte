<script>
  export let navlists = [];
  export let mobileimg = "";
  export let decath = "";
  export let search = "";
</script>

<div class="container-fluid">
  <div class="row ">
    <nav class=" navbar navbar-light">
      <button
        class="navbar-toggle navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
        <div class="menu">MENU</div>
      </button>

      <div class="decath">
        <img src={decath} alt="" class="img-fluid" />
      </div>

      <div class="mobilemenu">
        <img src={mobileimg} alt="" width="80px" />
      </div>

      <div id="#navbarResponsive" class="search">
        <img src={search} alt="" />
      </div>

      <div class="menulist">
        <ul class="nav navbar-nav ml-auto">
          {#each navlists as list}
            <li class="nav-item">
              <img src={list.img_url} alt={list.label} />
              <a class="nav-link active" href={list.url}>{list.label}</a>
            </li>
          {/each}

          <!-- <li class="nav-item">
        <a class="nav-link active" href="google.com">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="google.com">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="google.com">Home</a>
      </li> -->
        </ul>
      </div>
    </nav>
  </div>
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
  .navbar-nav {
    display: flex;
    flex-direction: row;
    justify-content: right;
  }
  .nav-item {
    text-align: center;
    line-height: 0.5rem;
    cursor: pointer;
  }

  .nav-link {
    font-size: 0.6rem;
    margin-right: 7px;
  }

  /* Small devices (landscape phones, 544px and up) */
  @media (min-width: 320px) and (max-width: 767px) {
    .search,
    .menulist {
      display: none;
    }
    .mobilemenu {
      display: visible;
    }
    .decath {
      width: 110px;
    }
  }

  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
  @media (min-width: 768px) and (max-width: 991px) {
    .mobilemenu {
      display: none;
    }
    .decath {
      width: 190px;
    }
    .search {
      display: none;
    }
    .menulist {
      width: 320px;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .mobilemenu {
      display: none;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .mobilemenu {
      display: none;
    }
  }
</style>
