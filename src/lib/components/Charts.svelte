<script>
  // @ts-nocheck
  export let todolist;
  import Chart from "chart.js/auto";
  import ChartDataLabels from "chartjs-plugin-datalabels";
  import { afterUpdate, onMount } from "svelte";

  let todoData = [];
  let chartData = [20, 100, 50, 12, 20, 130, 45];
  let Labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let labelsDoughnut = ["Completed", "Pending", "Rejected", "On-Going"];

  let myChart;
  let doughnutChart;
  let unique = {};

  const createCharts = () => {
    const CanvasBackgroundColor = {
      id: "CanvasBackgroundColor",
      beforeDraw: ({ config: { options }, ctx }) => {
        if (options.chartArea?.backgroundColor) {
          ctx.save();
          ctx.fillStyle = options.chartArea.backgroundColor;
          ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.restore();
        }
      },
    };
    //bar chart
    const config = {
      type: "bar",
      data: {
        labels: Labels,
        datasets: [
          {
            label: "India",
            data: chartData,
          },
          {
            label: "USA",
            data: chartData,
          },
          {
            label: "UK",
            data: chartData,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20, // Adjust the top padding value as needed
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              color: "#fafff0",
            },
            border: {
              display: false,
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            grid: {
              color: "#f3f3f3",
            },
            border: {
              display: false,
            },
            ticks: {
              callback: function (value, index, values) {
                // Format the y-axis ticks with a dollar sign
                return "$" + value;
              },
            },
          },
        },
        interaction: {
          mode: "x",
        },
        plugins: {
          datalabels: {
            anchor: "end",
            align: "top",
            formatter: (value, context) => {
              const dataSetArray = [];
              context.chart.data.datasets.forEach((dataset) => {
                if (dataset.data[context.dataIndex] != undefined) {
                  dataSetArray.push(dataset.data[context.dataIndex]);
                }
              });

              function totalSum(total, datapoint) {
                return total + datapoint;
              }

              let sum = dataSetArray.reduce(totalSum, 0);
              if (context.datasetIndex === dataSetArray.length - 1) {
                return sum;
              } else {
                return "";
              }
            },
          },
          legend: {
            position: "bottom",
            display: true,
            labels: {
              boxWidth: 25,
              boxHeight: 5, // Set a custom legend height
              useBorderRadius: true,
              borderRadius: 3,
            },
          },
          // tooltip: {
          //   // Disable the on-canvas tooltip
          //   enabled: false,
          //   position: "nearest",
          //   external: customTooltip,
          // },
        },
        chartArea: {
          backgroundColor: "#fafff0",
        },
      },
      plugins: [ChartDataLabels, CanvasBackgroundColor],
    };
    myChart = new Chart(document.getElementById("myChart"), config);
    //pie chart
    const config2 = {
      type: "pie", // Change the chart type to "pie"
      data: {
        labels: Labels,
        datasets: [
          {
            label: "India",
            data: chartData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(94, 245, 202, 0.8)",
            ], // Provide colors for each data point
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20, // Adjust the top padding value as needed
          },
        },
        plugins: {
          datalabels: {
            formatter: (value, context) => {
              return value; // Display the value on each segment
            },
          },
        },
        legend: {
          position: "bottom",
          display: true,
          labels: {
            boxWidth: 25,
            boxHeight: 5,
            useBorderRadius: true,
            borderRadius: 3,
          },
        },
        chartArea: {
          backgroundColor: "#fafff0",
        },
      },
    };
    myChart = new Chart(document.getElementById("myChart2"), config2);

    //doughnut chart
    const doughnutConfig = {
      type: "doughnut", // Change the chart type to "pie"
      data: {
        labels: labelsDoughnut,
        datasets: [
          {
            label: "Tasks",
            data: todoData,
            backgroundColor: ["#28a745", "#343a40", "#ffc107", "#dc3545"], // Provide colors for each data point
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20,
            bottom: 30, // Adjust the top padding value as needed
          },
        },
        plugins: {
          datalabels: {
            formatter: (value, context) => {
              return value; // Display the value on each segment
            },
          },
        },
        legend: {
          position: "bottom",
          display: true,
          labels: {
            boxWidth: 25,
            boxHeight: 5,
            useBorderRadius: true,
            borderRadius: 3,
          },
        },
        chartArea: {
          backgroundColor: "#fafff0",
          bottom: 30,
        },
      },
    };
    if (doughnutChart instanceof Chart) {
      // addData(doughnutChart, todoData);
    }
    doughnutChart = new Chart(
      document.getElementById("doughnutChart"),
      doughnutConfig
    );
  };
  // const destroyChart = (chart) => {
  //   if (chart instanceof Chart) {
  //     chart.destroy();
  //   }
  // };
  onMount(() => {
    createCharts();
  });
  const refreshComponent = () => {
    unique = {};

    // destroyChart(doughnutChart);
    // destroyChart(myChart);
    // destroyChart(myChart);

    // createCharts();
  };

  const todoChange = (data) => {
    let completedTotal = 0;
    let pendingTotal = 0;
    let rejectedTotal = 0;
    let ongoingTotal = 0;

    // Iterate through the todolist and update counters based on status
    data.forEach((item) => {
      switch (item.status) {
        case 0:
          pendingTotal++;
          break;
        case 1:
          ongoingTotal++;
          break;
        case 2:
          completedTotal++;
          break;
        case 3:
          rejectedTotal++;
          break;
      }
    });

    todoData = [completedTotal, pendingTotal, rejectedTotal, ongoingTotal];
  };

  function addData(chart, newData) {
    chart.datasets.forEach((dataset) => {
      dataset.data = newData;
    });
    chart.update();
  }

  function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }
  $: {
    todoChange(todolist);
  }
</script>

<div
  class="d-flex flex-lg-row justify-content-lg-end gap-6 mb-2 mb-lg-2 justify-content-end"
>
  <button
    on:click={refreshComponent}
    class="btn btn-success text-white p-2 text-sm rounded shadow-lg d-flex align-items-center gap-1 cursor-pointer"
  >
    Refresh
  </button>
</div>
{#key unique}
  <div class="row">
    <div class="col-md-5">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Task</h4>
          <p class="card-category">Complete</p>
        </div>
        <div class="card-body" style="height: 400px;">
          {#key todoData}
            <canvas
              id="doughnutChart"
              bind:this={doughnutChart}
              class="h-100"
            />
          {/key}
        </div>
        <!-- <div class="card-footer">
          <div class="legend">
            <i class="fa fa-circle text-primary" /> Completed
          </div>
        </div> -->
      </div>
    </div>
    <div class="col-md-7">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">World Map</h4>
          <p class="card-category">
            Map of the distribution of users around the world
          </p>
        </div>
        <div class="card-body" style="height: 400px;">
          <!-- <div class="mapcontainer"> -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63197946.13199194!2d36.08692214893822!3d14.808607335921637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1700133449494!5m2!1sen!2sin"
            width="100%"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="India"
            class="h-100"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h3>Bar Chart</h3>
        </div>
        <div class="card-body" style="height: 400px;">
          <canvas id="myChart" bind:this={myChart} class="h-100" />
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h3>Pie Chart</h3>
        </div>
        <div class="card-body" style="height: 400px;">
          <canvas id="myChart2" bind:this={myChart} class="h-100" />
        </div>
      </div>
    </div>
  </div>
{/key}
