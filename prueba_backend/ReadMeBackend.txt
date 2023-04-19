This text file is a guide on how to start the test backend in postman.

1.- I have created a local database connection in MySQL, called test. In the backend, following the path
src/main/resources/ in the application.properties file, I code the necessary elements for the connection.
2.- In the path src/main/java/com.example.prueba_backend I have created several packages to configure the handling of the data.
3.- The first package created is: model, with a user file to create and structure a table in the database called test.
4.- Second, I have created a package (repositories) with a file (UserRepInterface) which calls the JpaRepository class
to work with the methods that come in it, such as findAll, findById, etc.
5.- Then I created a package (exception) with a file to control possible errors in the execution of calls.
6.- Finally I have created a package (controllers) with a file (UserController) that manages the different calls
to the table in the database. This file contains the different paths to test in Postman. Run the backend and test
the routes. Below are the tests I perform:
- GET - http://localhost:8080/api/users/list - to display all the records contained in the users table.
- POST - http://localhost:8080/api/users/add - to add a record to the table.
- GET - http://localhost:8080/api/users/view/{id} - to display a specific record.
- PUT - http://localhost:8080/api/users/update/{id} - to modify data from a specific record.
- Delete - http://localhost:8080/api/users/delete/{id} - to delete a specific record.
- PATCH - http://localhost:8080/api/users/delete/upd/{id}/{value} - to modify only a specific field in the table.

I am using IntelliJ IDEA platform 2022.3.3 (Ultimate Edition) for frontend(react js) and backend(Spring Boot).