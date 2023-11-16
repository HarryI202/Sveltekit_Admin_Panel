<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<div class="wrapper">
  <Header />
  <Sidebar />
  <div class="main-panel">
    <slot />
    <footer class="footer">
      <div class="container-fluid">
        <nav class="pull-left">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="http://www.themekita.com">
                ThemeKita
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/"> Help </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://themewagon.com/license/#free-item"
              >
                Licenses
              </a>
            </li>
          </ul>
        </nav>
        <div class="copyright ml-auto">
          2018, made with <i class="la la-heart heart text-danger" /> by
          <a href="http://www.adminpanel.com">AdminPanel</a>
        </div>
      </div>
    </footer>
  </div>
</div>
