### Technical Overview

#### The Problem
When links inside an animated marquee element receive keyboard focus (e.g., via `Tab`), browsers attempt native scroll alignment on the focused element. In CSS-animated or JavaScript-driven marquee containers (`transform: translateX(...)` or `overflow: hidden`), this leads to unpredictable behavior:
1. The container's native `scrollLeft` value is mutated by the browser while the marquee track is simultaneously animating via CSS transforms or JS loops.
2. The marquee continues moving, carrying the focused element out of the viewport.
3. Visual glitching, broken layouts, or off-screen focus indicators occur.

#### The Solution
1. **Pause Animation on Focus**: Utilize CSS `:focus-within` and JavaScript `focusin`/`focusout` listeners to pause the animation when any child element receives focus.
2. **Prevent & Reset Native Scroll Shifts**: Catch browser-induced container scroll shifts by resetting `scrollLeft = 0` and properly positioning the track or focused element.
3. **Smooth Viewport Alignment**: Calculate the focused element's relative position within the marquee container viewport. If the element is partially or fully out of view, calculate the exact shift or call `scrollIntoView` safely to bring it into full view.

---

### Code Solution

#### CSS Styles (`marquee.css`)

```css
/* Marquee Container */
.marquee-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  white-space: nowrap;
}

/* Marquee Track */
.marquee-track {
  display: inline-flex;
  gap: 2rem;
  will-change: transform;
  animation: marquee-scroll 20s linear infinite;
}

/* Pause marquee on hover or keyboard focus within container */
.marquee-container:hover .marquee-track,
.marquee-container:focus-within .marquee-track,
.marquee-track.is-paused {
  animation-play-state: paused;
}

/* Focused link visible styling */
.marquee-container a:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 4px;
  border-radius: 2px;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

#### JavaScript Fix (`marquee-focus-handler.js`)

```javascript
/**
 * Enables accessible keyboard focus handling for marquee elements.
 * Pauses animation on focus and ensures focused links are scrolled into view.
 * 
 * @param {HTMLElement} marqueeContainer - The parent overflow-hidden marquee element.
 * @param {HTMLElement} marqueeTrack - The inner moving track element.
 */
export function initAccessibleMarquee(marqueeContainer, marqueeTrack) {
  if (!marqueeContainer || !marqueeTrack) return;

  // Prevent browser native scroll shift from corrupting marquee alignment
  marqueeContainer.addEventListener('scroll', () => {
    if (marqueeContainer.scrollLeft !== 0) {
      marqueeContainer.scrollLeft = 0;
    }
  });

  marqueeContainer.addEventListener('focusin', (event) => {
    const focusedElement = event.target;
    if (!(focusedElement instanceof HTMLElement)) return;

    // 1. Pause animation
    marqueeTrack.classList.add('is-paused');

    // 2. Reset native scroll override
    marqueeContainer.scrollLeft = 0;

    // 3. Ensure the focused element is smoothly brought into view inside the viewport
    bringElementIntoView(marqueeContainer, focusedElement);
  });

  marqueeContainer.addEventListener('focusout', (event) => {
    // Resume animation when focus leaves the marquee container
    if (!marqueeContainer.contains(event.relatedTarget)) {
      marqueeTrack.classList.remove('is-paused');
    }
  });
}

/**
 * Calculates bounds and scrolls/adjusts position to bring the element inside the visible marquee container.
 */
function bringElementIntoView(container, element) {
  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  const isLeftOfView = elementRect.left < containerRect.left;
  const isRightOfView = elementRect.right > containerRect.right;

  if (isLeftOfView || isRightOfView) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    });
  }
}
```

---

### Integration Example (HTML / Web Component)

```html
<div class="marquee-container" id="marquee">
  <div class="marquee-track" id="marquee-track">
    <a href="#link1">Link 1</a>
    <a href="#link2">Link 2</a>
    <a href="#link3">Link 3</a>
    <a href="#link4">Link 4</a>
  </div>
</div>

<script type="module">
  import { initAccessibleMarquee } from './marquee-focus-handler.js';

  const container = document.getElementById('marquee');
  const track = document.getElementById('marquee-track');

  initAccessibleMarquee(container, track);
</script>
```