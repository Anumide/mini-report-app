<script setup lang="ts">
import { ref, reactive } from 'vue';
import CardComponent from '@/components/CardComponent.vue';
import Chart from 'primevue/chart';
import Select from 'primevue/select';

const month = ref()
const months = ref(["Jan", "Feb", "Mar", "Apr", "May"])
const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    data: [100, 120, 120, 230, 250, 200, 230, 100, 270, 320, 370, 400],
    fill: true,
    backgroundColor: '#1B59F8',
    borderRadius: 12,
  }]
})

const chartOptions = reactive({
  stacked: false,
  maintainAspectRatio: false,
  aspectRatio: 0.2,
  elements: {
    point: {
      pointStyle: false
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
})
</script>

<template>
  <div class="activity">
    <CardComponent>
      <template #title>
        <div class="activity-card__title">
          <span>Activity</span>
          <div class="activity-menu">
            <Select v-model="month" :options="months" placeholder="Month" />
          </div>
        </div>
      </template>
      <Chart type="bar" :data="chartData" :options="chartOptions" style="height: 14rem;" />
    </CardComponent>
  </div>
</template>

<style scoped></style>