## Centralizer:

Description: This styled component is used to center its content horizontally and vertically.
Styles: It defines the display property as grid, centers the content using place-items: center, sets the height based on the height prop (or defaults to calc(100vh - 88px)), and sets the position property as relative.


## FormWrapper:

Description: This styled component extends the Centralizer component and adds specific styles for a form wrapper.
Styles: It inherits the styles from Centralizer and further customizes the styles for form-related components such as .Polaris-Box (setting width based on media queries) and .Polaris-FormLayout (adding a top margin). It also styles the .Polaris-Checkbox__Backdrop::before pseudo-element.


## LoginPageHeader:

Description: This styled component defines the styles for the header of the login page.
Styles: It sets the background color, horizontal padding, and removes the border from the .Polaris-Thumbnail elements.


## GridLayout:

Description: This styled component defines a grid layout with customizable columns, rows, and gap.
Styles: It sets the display property as grid, defines the number and size of columns and rows based on the columns and rows props (or defaults to "auto"), sets the gap between grid items based on the gap prop, and adjusts the height of .Polaris-Page elements.


## HomeLayout:

Description: This styled component defines the styles for the layout of the home page.
Styles: It sets the background image, background repeat behavior, and background size to cover the entire element.