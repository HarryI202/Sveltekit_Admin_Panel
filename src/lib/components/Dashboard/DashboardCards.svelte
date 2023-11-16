<script>
  import Card from "../Card.svelte";

  let cardSList = [
    {
      cardName: "Visitor",
      cardClass: "card card-stats card-warning",
      iconClass: "icon-big text-center",
      iconName: "fa fa-user",
      number: 1294,
    },
    {
      cardName: "Sales",
      cardClass: "card card-stats card-success",
      iconClass: "icon-big text-center",
      iconName: "fa fa-bar-chart",
      number: "$1,345",
    },
    {
      cardName: "Subscribers",
      cardClass: "card card-stats card-danger",
      iconClass: "icon-big text-center",
      iconName: "fa fa-newspaper-o",
      number: 1393,
    },
    {
      cardName: "Order",
      cardClass: "card card-stats card-primary",
      iconClass: "icon-big text-center",
      iconName: "fa fa-check-circle",
      number: 576,
    },
    {
      cardName: "Number",
      cardClass: "card card-stats",
      iconClass: "icon-big text-center icon-warning",
      iconName: "fa fa-pie-chart text-warning",
      number: "150GB",
    },
    {
      cardName: "Revenue",
      cardClass: "card card-stats",
      iconClass: "icon-big text-center icon-success",
      iconName: "fa fa-bar-chart text-success",
      number: "$1,345",
    },
    {
      cardName: "Errors",
      cardClass: "card card-stats",
      iconClass: "icon-big text-center icon-danger",
      iconName: "fa fa-times-circle-o text-danger",
      number: 23,
    },
    {
      cardName: "Followers",
      cardClass: "card card-stats",
      iconClass: "icon-big text-center icon-primary",
      iconName: "fa fa-heart-o text-primary",
      number: "+45K",
    },
  ];
</script>

<div class="row">
  {#each cardSList as card (card)}
    <Card {card} />
  {/each}

  
  <!-- <div class="col-md-3">
    <div class="card card-stats card-warning">
      <div class="card-body">
        <div class="row">
          <div class="col-5">
            <div class="icon-big text-center">
              <i class="fa fa-users" />
            </div>
          </div>
          <div class="col-7 d-flex align-items-center">
            <div class="numbers">
              <p class="card-category">Visitors</p>
              <h4 class="card-title">1,294</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card card-stats card-success">
      <div class="card-body">
        <div class="row">
          <div class="col-5">
            <div class="icon-big text-center">
              <i class="fa fa-bar-chart" />
            </div>
          </div>
          <div class="col-7 d-flex align-items-center">
            <div class="numbers">
              <p class="card-category">Sales</p>
              <h4 class="card-title">$ 1,345</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card card-stats card-danger">
      <div class="card-body">
        <div class="row">
          <div class="col-5">
            <div class="icon-big text-center">
              <i class="fa fa-newspaper-o" />
            </div>
          </div>
          <div class="col-7 d-flex align-items-center">
            <div class="numbers">
              <p class="card-category">Subscribers</p>
              <h4 class="card-title">1303</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card card-stats card-primary">
      <div class="card-body">
        <div class="row">
          <div class="col-5">
            <div class="icon-big text-center">
              <i class="fa fa-check-circle" />
            </div>
          </div>
          <div class="col-7 d-flex align-items-center">
            <div class="numbers">
              <p class="card-category">Order</p>
              <h4 class="card-title">576</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card card-stats">
      <div class="card-body">
        <div class="row">
          <div class="col-5">
            <div class="icon-big text-center icon-warning">
              <i class="fa fa-pie-chart text-warning" />
            </div>
          </div>
          <div class="col-7 d-flex align-items-center">
            <div class="numbers">
              <p class="card-category">Number</p>
              <h4 class="card-title">150GB</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card card-stats">
      <div class="card-body">
        <div class="row">
          <div class="col-5">
            <div class="icon-big text-center">
              <i class="fa fa-bar-chart text-success" />
            </div>
          </div>
          <div class="col-7 d-flex align-items-center">
            <div class="numbers">
              <p class="card-category">Revenue</p>
              <h4 class="card-title">$ 1,345</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card card-stats">
      <div class="card-body">
        <div class="row">
          <div class="col-5">
            <div class="icon-big text-center">
              <i class="fa fa-times-circle-o text-danger" />
            </div>
          </div>
          <div class="col-7 d-flex align-items-center">
            <div class="numbers">
              <p class="card-category">Errors</p>
              <h4 class="card-title">23</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card card-stats">
      <div class="card-body">
        <div class="row">
          <div class="col-5">
            <div class="icon-big text-center">
              <i class="fa fa-heart-o text-primary" />
            </div>
          </div>
          <div class="col-7 d-flex align-items-center">
            <div class="numbers">
              <p class="card-category">Followers</p>
              <h4 class="card-title">+45K</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</div>
