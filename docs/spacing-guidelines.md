# UI spacing guidelines

Use these conventions when building or reviewing UI in this project.

## Core rule

A component owns its internal padding. Its parent owns its external position and the spacing between siblings.

## Choosing a spacing property

### Padding: space inside a boundary

Use padding between a component's content and its edge. Backgrounds, borders, and clickable areas should include this space.

```html
<section class="px-page py-section">
  <!-- Section content -->
</section>

<button class="px-3 py-2">Contact</button>
```

### Gap: space between siblings

Prefer `gap` on flex and grid parents for normal spacing between child elements.

```html
<div class="flex flex-col gap-6">
  <h2>Selected work</h2>
  <p>...</p>
  <a href="/work">View work</a>
</div>
```

The parent owns this relationship. Gap remains correct when children are added, removed, reordered, or wrapped, and it avoids margin-collapsing behavior.

Useful patterns:

```html
<!-- Stack -->
<div class="flex flex-col gap-6">...</div>

<!-- Cluster -->
<div class="flex flex-wrap items-center gap-x-6 gap-y-3">...</div>

<!-- Grid -->
<div class="grid gap-6 md:grid-cols-3">...</div>
```

### Margin: external placement and exceptions

Use margin deliberately rather than as the default way to space siblings.

Appropriate uses include:

- Centering a constrained container with `mx-auto`
- Pushing one flex item with `ms-auto`
- Controlled prose flow
- Intentional overlap or full-bleed treatment
- An exceptional relationship that the parent layout cannot express

```html
<div class="mx-auto max-w-6xl">...</div>

<nav class="ms-auto">...</nav>
```

Avoid permanent outer margins on reusable components. Their parent should usually use `gap` instead.

## Project pattern

Compose sections using edge padding, a constrained container, and internal gaps:

```html
<section class="px-page py-section">
  <div class="mx-auto flex max-w-6xl flex-col gap-12">
    <header class="flex flex-col gap-3">
      <span class="type-label text-muted">01 / About</span>
      <h2 class="type-heading">Engineer first.</h2>
    </header>

    <p class="type-lead">...</p>
  </div>
</section>
```

In this example:

- `px-page` and `py-section` define section boundaries.
- `mx-auto` controls container placement.
- `gap-*` controls relationships between children.

## Spacing scale

Prefer Tailwind's spacing scale instead of repeating arbitrary values. Add a custom token only when it represents a reusable design decision.

Recommended rhythm:

| Size  | Typical use              |
| ----- | ------------------------ |
| 4px   | Micro spacing            |
| 8px   | Tight relationships      |
| 12px  | Compact controls         |
| 16px  | Normal component spacing |
| 24px  | Related groups           |
| 32px  | Component groups         |
| 48px  | Section groups           |
| 64px+ | Major section boundaries |

Fluid global spacing belongs in Tailwind's theme:

```css
@theme {
  --spacing-page: clamp(1.25rem, 4vw, 4.5rem);
  --spacing-section: clamp(4rem, 8vw, 8rem);
}
```

## Logical properties

Prefer flow-relative utilities when spacing depends on direction:

- `ms-*` and `me-*` instead of left/right margins
- `ps-*` and `pe-*` instead of left/right padding
- `mx-*` and `px-*` remain appropriate for symmetric spacing

## Avoid

- Mixing `gap` with child margins on the same axis
- Adding `mt-*` or `mb-*` to every component
- Empty elements used as spacers
- Using `justify-between` as a substitute for intentional rhythm
- Repeating arbitrary values such as `mt-[23px]`
- Negative margins without deliberate overlap or full-bleed behavior
- Encoding external spacing inside reusable child components

## Default decision order

When adding space, decide in this order:

1. Is it between a boundary and its content? Use padding.
2. Is it between siblings in a layout? Use gap.
3. Is it placement or a genuine exception? Use margin.
