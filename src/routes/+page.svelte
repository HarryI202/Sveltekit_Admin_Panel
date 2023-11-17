<script>
  import Charts from "$lib/components/Charts.svelte";
  import DashboardCards from "$lib/components/Dashboard/DashboardCards.svelte";
  import MyBalance from "$lib/components/MyBalance.svelte";
  import Todolist from "$lib/components/Todolist.svelte";
  import UserStatistics from "$lib/components/UserStatistics.svelte";
  import Users from "$lib/components/Users.svelte";
</script>

<div class="content">
  <div class="container-fluid">
    <h4 class="page-title">Dashboard</h4>
    <DashboardCards />
    <Charts />
    <MyBalance />
    <div class="row">
      <UserStatistics />
      <Users />
      <Todolist />
    </div>
  </div>
</div>
