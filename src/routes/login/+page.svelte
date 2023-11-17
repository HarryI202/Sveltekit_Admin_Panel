<script>
  let username = "";
  let password = "";
  let rememberMe = false;
  let showRequiredError = false;
  let showWrongCredentialsError = false;

  function handleSubmit() {
    // Your form submission logic goes here
    // Example: Check username and password and set error flags accordingly
    if (!username || !password) {
      showRequiredError = true;
      showWrongCredentialsError = false;
    } else {
      // Example: Check credentials (replace with your authentication logic)
      if (username === "example@example.com" && password === "password123") {
        // Successful login logic goes here
        showRequiredError = false;
        showWrongCredentialsError = false;
      } else {
        showRequiredError = false;
        showWrongCredentialsError = true;
      }
    }
  }
</script>

<section class="vh-100">
  <div class="container py-5 vh-100" style="height:100vh;">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <a href="/">
          <img
            src="/assets/img/forgot-password-icon-18358.png"
            alt="AP"
            height="400"
          />
        </a>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form method="POST" class="px-6 py-10 flex">
          <!-- <div class="w-full max-w-md"> -->
          <div class="flex items-center space-x-1">
            <h2 class="font-bold relative -top-1">Admin Panel</h2>
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="userId">Email/username</label>
            <input
              id="userId"
              name="userId"
              placeholder="Email/username"
              required
              bind:value={username}
              class="form-control form-control-lg"
            />
          </div>
          <div class="form-outline mb-4">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              bind:value={password}
              class="form-control form-control-lg"
            />
          </div>
          <div class="d-flex justify-content-around align-items-center mb-4">
            <div class="form-check">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                bind:checked={rememberMe}
                class="form-check-input"
              />
              <label for="remember" class="form-check-label">Remember Me</label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn-primary" on:click={handleSubmit}
            >Login</button
          >

          {#if showRequiredError}
            <p class="text-sm text-danger">
              Username and password are required!
            </p>
          {/if}
          {#if showWrongCredentialsError}
            <p class="text-sm text-danger">Wrong credentials.</p>
          {/if}

          <!-- </div> -->
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  /* Add your custom styles here */
</style>
