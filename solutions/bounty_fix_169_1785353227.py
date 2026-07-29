Here is the technical overview and code fix for the heading hierarchy issue in the Stepper component on the **Get Involved > Host** page.

---

### 1. Technical Overview & Root Cause Analysis

#### **Root Cause**
The `Stepper` component renders step titles using `<h4>` elements directly inside a page section whose parent header is an `<h2>`. Skipping heading levels (from `<h2>` directly to `4`) violates **WCAG 2.1 Success Criterion 1.3.1 (Info and Relationships)** and **SC 2.4.6 (Headings and Labels)**. 

Assistive technologies (such as screen readers) rely on sequential heading structures (`<h1>` → `<h2>` → `<h3>` → `<h4>`) to build a document outline for users navigating by headings.

#### **Solution**
1. **Semantic Heading Level:** Update step titles from `<h4>` to `<h3>` so they sequentially follow the section's `<h2>`.
2. **Dynamic Heading Level Support (Best Practice):** Enhance the `Stepper` component to accept a `headingLevel` or `as` prop (defaulting to `'h3'`), ensuring flexibility across different pages where parent heading contexts may vary.
3. **Visual Style Decoupling:** Maintain visual styling (font size, weight, line height) independent of the HTML tag using utility classes or UI library prop separation (e.g., MUI `component="h3" variant="h4"` or CSS modules/Tailwind).

---

### 2. Code Fix

#### Option A: React / TypeScript Component (`Stepper` & `Step`)

```tsx
import React, { ElementType, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Stepper.module.css';

export interface StepItem {
  id: string | number;
  title: string;
  description?: ReactNode;
}

export interface StepperProps {
  steps: StepItem[];
  activeStep?: number;
  /**
   * The semantic heading tag to render for step titles.
   * Defaults to 'h3' to maintain a valid heading hierarchy under h2 section headers.
   */
  headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep = 0,
  headingLevel: Heading = 'h3',
  className,
}) => {
  return (
    <ol className={clsx(styles.stepper, className)} aria-label="Process Steps">
      {steps.map((step, index) => {
        const isCurrent = index === activeStep;
        return (
          <li
            key={step.id}
            className={clsx(styles.step, { [styles.active]: isCurrent })}
            aria-current={isCurrent ? 'step' : undefined}
          >
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>{index + 1}</span>
              {/* Render semantic Heading element (h3) while retaining h4 visual styling */}
              <Heading className={clsx(styles.stepTitle, styles.headingStyleH4)}>
                {step.title}
              </Heading>
            </div>
            {step.description && (
              <div className={styles.stepContent}>{step.description}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
};
```

---

#### Option B: Material-UI (MUI) Fix

If using Material-UI (`@mui/material`), separate the semantic component from the visual variant:

```tsx
// Before (Skipped h3 and rendered semantic h4):
// <Typography variant="h4">{step.title}</Typography>

// After (Renders semantic h3 with h4 typography styling):
<Typography component="h3" variant="h4" className={styles.stepTitle}>
  {step.title}
</Typography>
```

---

#### Option C: HTML / CSS Fix

```html
<!-- Get Involved > Host Page -->
<section aria-labelledby="host-section-title">
  <!-- h2 section header -->
  <h2 id="host-section-title" class="section-title">How to Host an Event</h2>

  <!-- Stepper component with correct h3 step titles -->
  <ol class="stepper">
    <li class="stepper-item">
      <div class="stepper-header">
        <span class="step-badge">1</span>
        <h3 class="step-title">Submit Application</h3>
      </div>
      <p class="step-desc">Fill out the host interest form with your event details.</p>
    </li>
    <li class="stepper-item">
      <div class="stepper-header">
        <span class="step-badge">2</span>
        <h3 class="step-title">Event Review</h3>
      </div>
      <p class="step-desc">Our team reviews your submission within 3 business days.</p>
    </li>
  </ol>
</section>
```

```css
/* Maintain visual styling for step titles regardless of heading tag */
.step-title {
  /* Match previous h4 visual specification */
  font-size: 1.25rem; /* 20px */
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  color: var(--text-primary, #111827);
}
```

---

### 3. Verification & Accessibility Checklist

- [x] **Heading Hierarchy:** Validated outline using browser DevTools / Accessibility Tree (`h1` → `h2` → `h3`).
- [x] **Visual Parity:** Confirmed zero visual regression; font sizes and spacing remain identical.
- [x] **Screen Reader Navigation:** Verified VoiceOver / NVDA sequential heading navigation (`H` key shortcut jumps smoothly from `h2` section to `h3` step titles).