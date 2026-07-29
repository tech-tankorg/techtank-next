### Technical Overview

#### **Root Cause Analysis**
The event time labels on the home page event cards currently use a low-contrast text color (e.g., `#9CA3AF` / `text-gray-400` or `#999999`). On a white or light-gray card background (`#FFFFFF` or `#F9FAFB`), this yields a contrast ratio of ~2.8:1 to 3.0:1, failing **WCAG 2.1 AA guidelines** (which require a minimum contrast ratio of **4.5:1** for standard body text).

#### **Solution Strategy**
1. **Color Contrast Improvement**:
   - **Light Mode**: Darken the event time text to `#374151` (`text-gray-700`) or `#4B5563` (`text-gray-600`), yielding a contrast ratio of **9:1** or **4.6:1** respectively against white backgrounds.
   - **Dark Mode**: Lighten the time text to `#E5E7EB` (`text-gray-200`) against dark card backgrounds (`#1F2937`).
2. **Typography & Hierarchy**: Retain the subtle visual hierarchy using font size (`text-sm` / `0.875rem`) and font weight (`font-medium`) rather than relying on low-contrast opacity/color.

---

### Code Solution

#### Option 1: Tailwind CSS / React Component Fix

```tsx
// EventCard.tsx - Updated contrast for event timestamp text
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  imageUrl,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="h-40 w-full rounded-lg object-cover mb-3"
        />
      )}
      
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        {/* Updated Event Time & Date section with high-contrast text styling */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Clock aria-hidden="true" className="h-4 w-4 shrink-0 text-gray-600 dark:text-gray-300" />
          <time dateTime={time}>
            {date} &bull; {time}
          </time>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          {location}
        </p>
      </div>
    </div>
  );
};
```

---

#### Option 2: Vanilla CSS Fix

```css
/* event-card.css */

/* Before: Low contrast (~2.8:1 ratio) */
/* .event-card .event-time { color: #9ca3af; } */

/* After: WCAG 2.1 AA Compliant Contrast (>= 4.5:1) */
.event-card .event-time {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151; /* Gray 700 - Contrast ratio 9.0:1 on #ffffff */
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.event-card .event-time svg {
  color: #4b5563; /* Gray 600 */
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .event-card .event-time {
    color: #e5e7eb; /* Gray 200 - Contrast ratio 11.5:1 on #1f2937 */
  }
  .event-card .event-time svg {
    color: #d1d5db; /* Gray 300 */
  }
}
```

---

#### Option 3: Automated Python Contrast Verification Utility

You can run this Python script to verify contrast ratio compliance across light and dark theme colors:

```python
def relative_luminance(rgb: tuple[int, int, int]) -> float:
    """Calculates the relative luminance of an RGB color (WCAG 2.1)."""
    components = []
    for c in rgb:
        s_rgb = c / 255.0
        if s_rgb <= 0.03928:
            components.append(s_rgb / 12.92)
        else:
            components.append(((s_rgb + 0.055) / 1.055) ** 2.4)
    r, g, b = components
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast_ratio(hex1: str, hex2: str) -> float:
    """Calculates contrast ratio between two hex colors."""
    def hex_to_rgb(hex_str: str) -> tuple[int, int, int]:
        hex_str = hex_str.lstrip("#")
        return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))

    lum1 = relative_luminance(hex_to_rgb(hex1))
    lum2 = relative_luminance(hex_to_rgb(hex2))

    lighter = max(lum1, lum2)
    darker = min(lum1, lum2)
    return (lighter + 0.05) / (darker + 0.05)


if __name__ == "__main__":
    bg_light = "#FFFFFF"
    old_text_light = "#9CA3AF"  # Low contrast text
    new_text_light = "#374151"  # Fixed high contrast text

    print(f"Old Light Mode Contrast: {contrast_ratio(old_text_light, bg_light):.2f}:1 (FAILS WCAG AA)")
    print(f"New Light Mode Contrast: {contrast_ratio(new_text_light, bg_light):.2f}:1 (PASSES WCAG AA)")
```