<script>
  import "../app.css";
  import { page } from "$app/stores";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
</script>

{#if !$page.route.id?.includes("/login")}
  <div class="wrapper">
    <Header />
    <!-- {/if} -->
    <Sidebar />
    <div class="main-panel">
      <slot />
    </div>
    <!-- {#if !$page.route.id?.includes("/login")} -->
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
{:else}
  <div class="wrapper">
    <slot />
  </div>
{/if}
