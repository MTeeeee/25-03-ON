## Dein Flexbox-Cheat-Sheet

```css
/* Container (Parent) */
.flex-container {
    display: flex;
    justify-content: center;     /* space-between, space-around, flex-start, flex-end */
    align-items: center;         /* flex-start, flex-end, stretch */
    flex-direction: row;         /* column, row-reverse, column-reverse */
    flex-wrap: wrap;            /* nowrap, wrap-reverse */
}

/* Items (Children) */
.flex-item {
    flex: 1;                    /* Kurzform für grow, shrink, basis */
    flex-grow: 1;               /* Wie stark wächst das Item */
    align-self: center;         /* Überschreibt align-items für dieses Item */
}
```