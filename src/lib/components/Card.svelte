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
            <!-- <img
              src="/assets/img/forgot-password-icon-18346.png"
              alt="imalkdsp"
              height="50"
              width=""
            /> -->
            <img
              src="/assets/img/forgot-password-icon-18358.png"
              alt="imalkdsp"
              height="50"
              width=""
            />
            <img
              src="/assets/img/img1.png"
              alt="imalkdsp"
              height="50"
              width=""
            />
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
