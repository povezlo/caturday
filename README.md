# Caturday

Created a search for cat pictures in the form of a list with filters, using https://theCatAPI.com.

Used the specified technologies:

Angular, Angular Material, Reactive Forms, RxJS, NgXS.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Description

### Created 3 get methods.:
- getCats(params?)
- getBreeds()
- getCategories()

### Created filters in filter-sidebar:
- categories
- number of results
- breeds

### Created ngxs store:
- categories state
- breed state
- cats state

### Created interceptors:
- httperrors (catch all errors)
- token

### Created services:
- base-api
- cat-api
- loader
- notification
  
### Created pipe & helpers:
- slice-paginator-list.pipe (returns a new array equal to the paginator.pageSize)
- filterObject function (returns a new object with only fields that have values)
- trackByFn function
  
In the coming days, I plan to add more requests and expand the filter.

## Development server

Run `run npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
