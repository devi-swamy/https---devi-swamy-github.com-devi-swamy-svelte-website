<script>
  export let menulist = {};
  const { MENU1, MENU2, MENU3, MENU4, MENU5, MENU6 } = menulist;
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-12 navbar-nav  d-none d-md-block">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item menu1 border-md-right">
            <a class="nav-link" href="#allsports">{MENU1}</a>
          </li>

          <li class="nav-item menu2">
            <a class="nav-link" href="#men">{MENU2}</a>
          </li>

          <li class="nav-item menu3">
            <a class="nav-link" href="#women">{MENU3}</a>
          </li>

          <li class="nav-item menu4">
            <a class="nav-link" href="#kids">{MENU4}</a>
          </li>

          <li class="nav-item menu5">
            <a class="nav-link" href="#accessories">{MENU5}</a>
          </li>

          <li class="nav-item menu6">
            <a class="nav-link" href="#nutrition">{MENU6}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

<style>
  .container-fluid {
    width: 100%;
    box-shadow: 1px 2px 8px 2px lightgrey;
    background-color: #fafafa;
    box-sizing: border-box;
  }
  .navbar-nav {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
  .navbar-nav > li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    align-items: center;
    align-content: center;
    text-decoration: none;
  }
  .nav-link {
    font-size: 1rem;
    font-weight: 700;
    color: #575d5e !important;
    height: 3.5rem;
    font-family: "Roboto Condensed", "Arial Narrow", sans-serif;
    text-align: center;
    padding: 1rem;
  }

  .menu1::after,
  .menu2::after,
  .menu3::after,
  .menu4::after,
  .menu5::after,
  .menu6::after {
    content: "|";
    padding: 0 2rem;
  }
</style>
