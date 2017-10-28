# CloseOnOutsideClick

React wrapper component where you need to know if you clicked outside the content

## Props

This component takes the following props.

| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `onClick`         | _function_ | Event fired when a user clicks outside the children content

Example usage
```
<CloseOnOutsideClick
  onClick={this.closePopup}
>
  <PopupMenu />
</CloseOnOutsideClick>
```
