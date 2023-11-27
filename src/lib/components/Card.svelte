<script>
  // @ts-nocheck
  export let card;
  let data = card;
</script>

<div class="col-md-3">
  <div class={data.cardClass}>
    <div class="card-body">
      <div class="row">
        <div class="col-5">
          <div class={data.iconClass}>
            <i class={data.iconName} />
          </div>
        </div>
        <div class="col-7 d-flex align-items-center">
          <div class="numbers">
            <p class="data-category">{data.cardName}</p>
            <h4 class="data-title">{data.number}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
