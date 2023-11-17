<script>
  // @ts-nocheck
  let showModal = false;
  let defaultView = true;
  let rowIndex;
  let allChecked = false;
  let visibleInput = false;
  let todoName = "";
  let todostatus = ["Pending", "OnGoing", "Completed", "Rejected"];
  let todolist = [
    { name: "Planning new project structure", status: 0 },
    { name: "Update Fonts", status: 1 },
    { name: "Add new Post", status: 2 },
    { name: "Finalise the design proposal", status: 3 },
  ];
  const getClass = (status) => {
    if (status === 0) {
      return "text-dark";
    }
    if (status === 1) {
      return "text-warning";
    }
    if (status === 2) {
      return "text-success";
    }
    if (status === 3) {
      return "text-danger";
    }
    return "text-dark";
  };
  const openModal = (index) => {
    showModal = true;
  };
  const closeModal = () => {
    showModal = false;
  };

  const enableEdit = (index) => {
    rowIndex = index;
    defaultView = false;
    // Enable editing for the input field
    let inputField = document.getElementById(`input-${index}`);
    let defaultDiv = document.getElementById(`default-${index}`);
    let changedDiv = document.getElementById(`change-${index}`);
    defaultDiv.classList.add("d-none");
    changedDiv.classList.remove("d-none");
    inputField.focus();
  };

  const changeStatus = () => {
    if (allChecked) {
      todolist.forEach((item, index) => (todolist[index].status = 2));
    } else {
      todolist.forEach((item, index) => (todolist[index].status = 0));
    }
  };
  const handleClickOutside = (event, index) => {
    const modal = document.getElementById("input-" + index);
    if (modal && !modal?.contains(event.target)) {
      // do what you want to
    }
  };
  const onEditSave = (index, status) => {
    todolist[index].status = status;
    defaultView = true;

    let defaultDiv = document.getElementById(`default-${index}`);
    let changedDiv = document.getElementById(`change-${index}`);
    defaultDiv.classList.remove("d-none");
    changedDiv.classList.add("d-none");
    rowIndex = null;
  };

  const addTodo = () => {
    todolist.push({
      name: todoName,
      status: 0,
    });
    visibleInput = false;
  };
</script>

{#if showModal}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal-overlay" on:mousedown={closeModal}>
    <div class="modals">
      <button
        on:click={closeModal}
        type="button"
        class="close close-button"
        aria-label="Close"><i class="fa fa-times" /></button
      >
      <!-- <button on:click={closeModal} class="close-button">&times;</button> -->
      <h2>Edit Todolist</h2>
      <div class="modal-content">
        <p>Modal content goes here.</p>
        <button on:click={closeModal}>Close</button>
        <!-- Additional modal buttons can be added here -->
      </div>
    </div>
  </div>
{/if}
<div class="col-md-7">
  <div class="card card-tasks">
    <div class="card-header d-flex">
      <div>
        <h4 class="card-title">Tasks</h4>
        <span class="card-category">To Do List</span>
      </div>

      <div class="ml-auto">
        <span class="ml-auto flex-wrap items-center text-sm font-normal w-full"
          >Status:
          <div class="d-flex mb-1">
            <span class="rounded px-1 bg-dark" />
            <span class="text-naro-300 ml-2">Pending</span>
            <span class="rounded px-1 bg-warning ml-2" />
            <span class="text-naro-300 ml-2">On-Going</span>
          </div>
          <div class="d-flex">
            <span class="rounded px-1 bg-success" />
            <span class="text-naro-300 ml-2">Completed</span>
            <span class="rounded px-1 bg-danger ml-2" />
            <span class="text-naro-300 ml-2">Rejected</span>
          </div>
        </span>
      </div>
    </div>
    <div class="card-body">
      <div class="table-full-width" role="button" tabindex="">
        <!-- on:mousedown={(e) => handleClickOutside(e, rowIndex)} -->
        <table class="table">
          <thead>
            <tr>
              <td>&nbsp;</td>
              <td class="d-flex">
                {#if visibleInput}
                  <input
                    type="text"
                    class="form-control"
                    style="width:fit-content;"
                    placeholder="Enter your todo name"
                    bind:value={todoName}
                  />
                  <i
                    class="fa fa-check text-success p-3"
                    role="button"
                    tabindex=""
                    aria-label="Completed"
                    data-toggle="tooltip"
                    title="Save"
                    on:mousedown={addTodo}
                  />
                {:else}
                  &nbsp;
                {/if}
              </td>
              <td>
                <!-- <div class="ml-4 btn"> -->
                <i
                  role="button"
                  class="fa fa-plus"
                  data-toggle="tooltip"
                  title="Add task"
                  tabindex=""
                  on:mousedown={() => (visibleInput = true)}
                >
                  Add Todo</i
                >

                <!-- </div> -->
              </td>
            </tr>
            <tr>
              <th>
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      class="form-check-sign select-all-checkbox"
                      type="checkbox"
                      data-select="checkbox"
                      bind:checked={allChecked}
                      on:change={changeStatus}
                    />
                    <!-- <span class="form-check-sign"></span> -->
                  </label>
                </div>
              </th>
              <th>Task</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {#key todolist}
              {todolist.length}
              {#each todolist as item, index (item)}
                <tr>
                  <td>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          class=" text-success"
                          type="checkbox"
                          checked={item.status === 2 ? true : false}
                          on:change={() =>
                            (todolist[index].status =
                              todolist[index].status === 0
                                ? 2
                                : todolist[index].status === 1 ||
                                  todolist[index].status === 3
                                ? 2
                                : 0)}
                        />
                        <!-- <span class="form-check-sign"></span> -->
                      </label>
                    </div>
                  </td>
                  <td class={getClass(item.status)}>
                    <div id="default-{index}">
                      {item.name}
                    </div>

                    <div class="input-group d-none" id="change-{index}">
                      <input
                        type="text"
                        class="form-control {getClass(item.status)}"
                        bind:value={item.name}
                        style="width:fit-content;"
                        id={"input-" + index}
                      />
                      <div class="p-2">
                        <i
                          class="fa fa-check text-success"
                          role="button"
                          tabindex="ind-{index}"
                          aria-label="Completed"
                          data-toggle="tooltip"
                          title="Save"
                          on:mousedown={() => onEditSave(index, 0)}
                        />
                        <i
                          class="fa fa-ban text-danger"
                          role="button"
                          tabindex="ind-{index}"
                          data-toggle="tooltip"
                          title="Reject"
                          on:mousedown={() => onEditSave(index, 3)}
                          aria-label="Completed"
                        />
                      </div>
                    </div>
                  </td>
                  <td class="td-actions text-right">
                    <div class="form-button-action">
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Edit Task"
                        class="btn btn-link <btn-simple-primary"
                        on:click={() => enableEdit(index)}
                      >
                        <i class="fa fa-edit" />
                      </button>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Remove"
                        class="btn btn-link btn-simple-danger"
                      >
                        <i class="fa fa-times" />
                      </button>
                    </div>
                  </td>
                </tr>
              {/each}
            {/key}
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer">
      <div class="stats">
        <i class="now-ui-icons loader_refresh spin" /> Updated 3 minutes ago
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    overflow: hidden;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modals {
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    position: fixed;
    max-width: 600px; /* Adjust the max-width as needed */
    width: 100%;
    box-sizing: border-box;
  }

  .modal-content {
    /* Add any additional styling for the modal content */
  }

  @media (max-width: 767px) {
    /* Add padding to the sides of the modal in mobile view */
    .modal {
      padding: 20px 10px;
    }
  }
</style>
