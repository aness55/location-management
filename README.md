# location-management
Test assignment for interview purposes

This is the Location management application that enables user to create, edit, delete different locations.
The most important features implemented are:

- Registration and authorisation
- Locations dashboard with the help of Open Street Map and openlayers package
- CRUD operations for each location are achieved using Reactive Forms, as well as the validation of the forms
- On the dashboard, the filter is implemented using simple array filtering and string lookup
- For the styles Tailwind is used.
- Admin users are able to create, update or delete locations
- By default, newly created users are not admins. Please, switch admin to TRUE in the 'db' manually

In order to run the code follow these steps:

1. Navigate to 'client' folder using terminal
2. Run 'npm i'
3. Start Angular using 'ng serve'
4. Navigate to 'server' folder
5. Run 'npm i'
6. Start backend using 'npm start'

P.S. In order to upgrade user to Admin, manually switch the admin role to TRUE, and run 'server' again.

Thank you