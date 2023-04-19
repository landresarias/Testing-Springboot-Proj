This text file is a guide on how to start the frontend with React JS.
1.- In the src route I have modified the App.js file. the Switch in react-router-dom doesn't work
and I replaced them with Routes. the same instead of Component now Element is used.
2.- Next, I have created a folder(components) to house several files that structure the frontend.
3.- In components, I create a file for the construction of a Navbar adding bootstrap elements.
4.- In components, I create a file for the construction of a Footer adding bootstrap elements.
5.- In components, I create a file (Home) to display several objects on a website: a list of all
the records in the users table, an Add button to link to a data entry form, a View button to see
records specific records (by ID), a Delete button to delete specific records (by ID), and finally
an Update button to modify data of a specific record (by ID).
6.- Clicking on the Add button displays a form that can be used to add and update records. If you
click on the Add button and enter data in the text fields, a new record will be created (save) or
you can exit without saving (Cancel).
7.- Click on the Update button, the data of the chosen record is loaded, which can be modified
if you click Save or not save if you click Cancel.

I am using IntelliJ IDEA platform 2022.3.3 (Ultimate Edition) for frontend(react js) and backend(Spring Boot).