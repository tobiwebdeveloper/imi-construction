<template>
  <section class="section price-calculator" id="estimate">
    <div class="container">
      <div class="calculator">

        <!-- LEFT -->
        <div class="calculator-content">

          <div class="calculator-header">
            <span class="eyebrow">
              {{ calculator.eyebrow }}
            </span>

            <h2>
              {{ calculator.heading }}
            </h2>

            <p>
              {{ calculator.description }}
            </p>
          </div>

          <div class="calculator-form">

            <!-- PROJECT TYPE -->
            <div class="calculator-field">
              <span class="calculator-label">
                What are you looking to build?
              </span>

              <div class="option-grid">
                <button
                  v-for="option in calculator.projectTypes"
                  :key="option.id"
                  class="option"
                  :class="{ 'option--active': projectType === option.value }"
                  type="button"
                  @click="projectType = option.value"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>

            <!-- PROPERTY TYPE -->
            <div class="calculator-field">
              <span class="calculator-label">
                What type of property?
              </span>

              <div class="option-grid">
                <button
                  v-for="option in calculator.propertyTypes"
                  :key="option.id"
                  class="option"
                  :class="{ 'option--active': propertyType === option.value }"
                  type="button"
                  @click="propertyType = option.value"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>

            <!-- PROJECT SIZE -->
            <div class="calculator-field">
              <span class="calculator-label">
                Approximate size?
              </span>

              <div class="option-grid option-grid--sizes">
                <button
                  v-for="option in calculator.projectSizes"
                  :key="option.id"
                  class="option option--size"
                  :class="{ 'option--active': projectSize === option.value }"
                  type="button"
                  @click="projectSize = option.value"
                >
                  <strong>{{ option.label }}</strong>
                  <small>{{ option.description }}</small>
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- RIGHT -->
        <div class="estimate-panel">

          <span class="eyebrow">
            Estimate
          </span>

          <div v-if="estimate" class="estimate-result">
            <span class="estimate-label">
              Indicative project cost
            </span>

            <strong class="estimate-price">
              £{{ estimate?.min.toLocaleString() }} – £{{ estimate?.max.toLocaleString() }}+
            </strong>

            <p>
              This is an initial indication based on the information provided.
              Final pricing depends on the project requirements.
            </p>

            <button
              class="btn-primary"
              type="button"
              @click="getEstimate"
            >
              Get my estimate
            </button>
          </div>

          <div v-else class="estimate-empty">
            <h3>
              Your project<br />
              is taking shape.
            </h3>

            <p>
              Select your project type, property type and approximate size
              to see an indicative cost.
            </p>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { siteData } from '~/data/siteData'

const calculator = siteData.calculator

type ProjectType =
  | 'new-construction'
  | 'renovation'
  | 'addition'
  | 'repair'

type PropertyType = 'residential'

type ProjectSize =
  | 'small'
  | 'medium'
  | 'large'
const projectType = ref<ProjectType | null>(null)
const propertyType = ref<PropertyType | null>(null)
const projectSize = ref<ProjectSize | null>(null)


const getEstimate = () => {
  console.log({
    projectType: projectType.value,
    propertyType: propertyType.value,
    projectSize: projectSize.value,
  })
}

const estimate = computed(() => {
  if (!projectType.value || !propertyType.value || !projectSize.value) {
    return null
  }

  return calculator.pricing[
    projectType.value
  ][
    propertyType.value
  ][
    projectSize.value
  ]
})
</script>

<style scoped>
.price-calculator {
  background: var(--color-surface);
}

.calculator {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: var(--space-12);

  max-width: 1100px;
  margin-inline: auto;
  padding: var(--space-12);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);

  background: var(--color-surface-elevated);
}

.calculator-content {
  min-width: 0;
}

.calculator-header {
  max-width: 600px;
  margin-bottom: var(--space-12);
}

.calculator-header h2 {
  margin: var(--space-4) 0;
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.calculator-header p {
  margin: 0;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

.calculator-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
}

.calculator-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.calculator-label {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
}

.option-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-2);
}

.option {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  padding: var(--space-3) var(--space-4);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);

  background: transparent;
  color: var(--color-text-muted);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);

  cursor: pointer;

  transition:
    border-color var(--duration-fast) var(--ease-standard),
    background var(--duration-fast) var(--ease-standard),
    color var(--duration-fast) var(--ease-standard);
}

.option:hover {
  border-color: var(--color-border-strong);
  color: var(--color-text);
}

.option--active {
  border-color: var(--color-text);
  background: var(--color-text);
  color: var(--color-background);
}

.option--size {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--space-1);
  text-align: left;
}

.option--size small {
  color: var(--color-text-subtle);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
}

.option--size.option--active small {
  color: inherit;
  opacity: 0.65;
}

.calculator-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: var(--space-2);
}

/* =========================================================
   ESTIMATE PANEL
   ========================================================= */

.estimate-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100%;
  padding: var(--space-8);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);

  background: var(--color-surface);
}

.estimate-result {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: auto;
}

.estimate-label {
  font-family: var(--font-decorative);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;

  color: var(--color-text-muted);
}

.estimate-price {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.estimate-result p,
.estimate-empty p {
  margin: 0;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

.estimate-empty {
  margin-top: auto;
}

.estimate-empty h3 {
  margin: var(--space-4) 0;
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 900px) {
  .calculator {
    grid-template-columns: 1fr;
  }

  .estimate-panel {
    min-height: 280px;
  }
}

@media (max-width: 768px) {
  .calculator {
    padding: var(--space-6);
  }

  .option-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .calculator-header h2 {
    font-size: var(--text-3xl);
  }
}
</style>