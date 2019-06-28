const dashboardChart = {
  type: "scatter",
  data: canvas => {
    return {
      labels: [
      "January 30",
      "January 29",
      "January 28",
      "January 27",
      "January 26",
      "January 25",
      "January 24",
      "January 23"
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "rgba(177, 250, 236, 0.5)",
          pointRadius: 5,
          pointHoverRadius: 5,
          borderWidth: 3,
          data: [1,1,7,0,0,2,1,1],
          label: "happy"
        },
        {
          borderColor: "#FFFF00",
          backgroundColor: "rgba(251, 232, 156, 0.5)",
          pointRadius: 5,
          pointHoverRadius: 5,
          borderWidth: 3,
          data: [0,0,7,0,0,5,4,2],
          label: "neutral"
        },
        {
          borderColor: "#FF0000",
          backgroundColor: "rgba(246, 187, 161, 0.5)",
          pointRadius: 5,
          pointHoverRadius: 5,
          borderWidth: 3,
          data: [0,0,0,0,0,1,0,0],
          label: "sad"
        }
      ]
    };
  },
  options: {
    low: 0,
    high: 7,
    legend: {
      display: true,
    },

    tooltips: {
      enabled: true
    },

    point: {
       display: true
    },

    xAxes: {
        showGrid: true,
      },

    yAxes: {
        showGrid: true,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 10
            //padding: 20
          },
          gridLines: {
            display: true,
            drawBorder: true,
            zeroLineColor: "#ccc",
            color: "rgba(128,128,128,0.8)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: true,
            color: "rgba(128,128,128,0.8)",
            zeroLineColor: "transparent",
            display: true
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f"
          }
        }
      ]
    }
  }
};


module.exports = {
  dashboardChart,
};
