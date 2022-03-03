# selectors

### Type selector

```css
section {
	background-color: blue;
}
```

### Class selector

```css
.card {
	border-radius: 8px;
}
```

### ID Selector

```css
#unique-element {
	font-size: 4rem;
}
```

### Attribute Selector

```css
[href*="https"] {
	color: yellow;
}
```

```css
img:not([alt]) {
	filter: blur(5px);
}
```

| [attr]                                    | [attr=value]                                                   | [attr~=value]                                                                                                            | [attr\|=value]                                                                                                    | [attr^=value]                                         | [attr$=value]                                      | [attr*=value]                                                   |
| ----------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------- |
| All elements with the specified attribute | All elements where the specified attribute is equal to ‘value’ | All elements with an attribute which has a list of whitespace-separated values, one of which is exactly equal to ‘value’ | All elements with an attribute which has a hyphen-separated list of values beginning (from the left) with ‘value’ | All elements with an attribute beginning with ‘value’ | All elements with an attribute ending with ‘value’ | All elements with an attribute containing the substring ‘value’ |

### Group selectors

`,`

### Combinators

#### Descendant

```css
div p {
}
```

#### Direct descendant

```css
div > p {
}
```

#### General sibling

```css
div ~ p {
}
```

#### Adjacent sibling

```css
div + p {
}
```
