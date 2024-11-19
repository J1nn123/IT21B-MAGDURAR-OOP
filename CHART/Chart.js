class ChartManager {
    constructor(chartId, chartType, dataUrl) {
      this.chartId = chartId;
      this.chartType = chartType;
      this.dataUrl = dataUrl;
      this.chart = null;
    }
  
    async fetchData() {
      try {
        const response = await fetch(this.dataUrl);
        console.log(`Fetching data from ${this.dataUrl}`);
        if (!response.ok) throw new Error(`Failed to fetch data: ${response.statusText}`);
        const data = await response.json();
        console.log("Data fetched successfully:", data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    async initialize() {
      const data = await this.fetchData();
      if (!data) {
        console.error("Data is undefined or null");
        return;
      }
  
      const chartData = data[this.chartId];
      if (!chartData) {
        console.error(`No data found for chartId: ${this.chartId}`);
        return;
      }
  
      const ctx = document.getElementById(this.chartId)?.getContext("2d");
      if (!ctx) {
        console.error(`Canvas element with ID '${this.chartId}' not found`);
        return;
      }
  
      this.chart = new Chart(ctx, {
        type: this.chartType,
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: `${this.chartType} Chart`,
              data: chartData.data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)"
              ],
              
              borderWidth: 1
            }
          ]
        },



        options: {
          responsive: true,
          scales: {
            y: this.chartType === "bar" ? { beginAtZero: true } : undefined
          }
        }
      });
    }
  }
  
  // Initialize Bar Chart
  const barChart = new ChartManager("barChart", "bar", "Chart.json");
  barChart.initialize();
  
  // Initialize Pie Chart
  const pieChart = new ChartManager("pieChart", "pie", "Chart.json");
  pieChart.initialize();

  const lineChart = new ChartManager("lineChart", "line", "Chart.json");
  lineChart.initialize();