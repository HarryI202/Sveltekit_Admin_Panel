<script>
  // @ts-nocheck

  import Charts from "$lib/components/Charts.svelte";
  import DashboardCards from "$lib/components/Dashboard/DashboardCards.svelte";
  import MyBalance from "$lib/components/MyBalance.svelte";
  import Todolist from "$lib/components/Todolist.svelte";
  import UserStatistics from "$lib/components/UserStatistics.svelte";
  import Users from "$lib/components/Users.svelte";

  let todolist = [
    { name: "Planning new project structure", status: 0 },
    { name: "Update Fonts", status: 1 },
    { name: "Add new Post", status: 2 },
    { name: "Finalise the design proposal", status: 3 },
  ];

  function handleChildData(event) {
    todolist = event.detail.detail.data;
  }
</script>

<div class="content">
  <div class="container-fluid">
    <h4 class="page-title">Dashboard</h4>
    <DashboardCards />
    <Charts {todolist} />
    <MyBalance />
    <div class="row">
      <UserStatistics />
      <Users />
      <Todolist {todolist} on:dataReceived={handleChildData} />
    </div>
  </div>
</div>
