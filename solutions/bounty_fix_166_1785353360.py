### Technical Overview

#### **Root Cause**
The homepage event card link component relies on an incomplete custom focus state. On focus (e.g., keyboard `Tab` navigation), `outline: none` or `focus:outline-none` was removing the browser's default focus ring, while only applying a right border (e.g. `border-r-2`) to the internal card title element rather than surrounding the entire interactive element with a visible focus ring.

This creates two issues:
1. **Low Visibility / Poor Accessibility**: A subtle right border on a text element fails WCAG 2.1 Success Criterion 2.4.7 (Focus Visible) and 1.4.11 (Non-text Contrast).
2. **Confusing Interactive Surface**: Users navigating via keyboard cannot easily determine the boundaries of the clickable event card link.

#### **Solution Strategy**
1. **Focus State Scoping**: Shift focus indication from `:focus` to `:focus-visible` so mouse clicks do not leave persistent focus rings, while keyboard users receive a clear visual indicator.
2. **Card-Level Focus Ring**: Apply a full high-contrast outline / ring around the entire event card link (`focus-visible:ring-2` / `outline` with `outline-offset`).
3. **Remove Partial Borders**: Remove the partial right-border CSS property on the event title element when focused.

---

### Code Solution

#### Option 1: Tailwind CSS / React Component Fix

```tsx
import React from 'react';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  location,
  imageUrl,
}) => {
  return (
    <a
      href={`/events/${id}`}
      className="
        group block overflow-hidden rounded-xl border border-gray-200 bg-white p-5 
        shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md
        /* Fixed Focus Indicator */
        outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900
      "
      aria-label={`Event details for ${title}`}
    >
      {imageUrl && (
        <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="space-y-2">
        {/* Removed partial border-r-2 on title focus */}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white">
          {title}
        </h3>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span>{date}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </div>
    </a>
  );
};
```

---

#### Option 2: Pure CSS / SCSS Fix

```css
/* ==========================================================================
   Event Card Focus Ring Fix
   ========================================================================== */

/* 1. Ensure card container acts as full interactive element */
.event-card-link {
  display: block;
  text-decoration: none;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  padding: 1.25rem;
  background-color: #ffffff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

/* 2. Reset legacy subtle border-right on title */
.event-card-link:focus .event-card-title,
.event-card-link:focus-visible .event-card-title {
  border-right: none !important;
}

/* 3. Apply high-contrast, accessible focus ring around the whole card */
.event-card-link:focus {
  outline: none; /* Fallback for browsers without focus-visible */
}

.event-card-link:focus-visible {
  outline: 2px solid #2563eb; /* 2px solid high-contrast blue */
  outline-offset: 2px;       /* Separation between card border and ring */
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #2563eb;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .event-card-link:focus-visible {
    outline-color: #60a5fa;
    box-shadow: 0 0 0 2px #111827, 0 0 0 4px #60a5fa;
  }
}
```

---

### Verification & Testing
1. **Keyboard Navigation**: Press `Tab` to navigate through homepage elements. Verify that when focus lands on an event card, a distinct 2px blue ring surrounds the entire card container with offset.
2. **Mouse Interactions**: Click on the event card. Confirm that focus rings do not trigger on mouse click (handled via `:focus-visible`).
3. **Accessibility Audit**: Validate with automated tools (e.g., axe DevTools / Lighthouse) to ensure zero WCAG 2.4.7 violations on event cards.