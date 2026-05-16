# QA Technical Test — Sauce Demo & Restful Booker

## 📌 Project Overview

This repository contains automated UI and API tests developed as part of a QA Technical Assessment.

The project covers:

* UI Testing using Cypress
* API Testing using Postman
* Functional, accessibility, responsiveness, security and performance validations
* Documentation and evidence collection

---

# 🧰 Technologies Used

## UI Testing

* Cypress
* JavaScript
* Page Object Model (POM)
* Cypress Axe

## API Testing

* Postman
* JavaScript (Postman Scripts)
* Restful Booker API

---

# 📂 Project Structure

```text
├── cypress/
│   ├── e2e/
│   │   ├── Accessibility/
│   │   ├── Buying/
│   │   ├── Filtering/
│   │   ├── Login/
│   │   ├── Removing/
│   │   ├── Responsive/
│   │   └── Pages/
│   ├── fixtures/
│   └── support/
│
├── postman/
│   ├── Restful-Booker-Collection.json
│   └── Restful-Booker-Environment.json
│
├── evidences/
│   ├── ui-tests/
│   └── api-tests/
│
└── README.md
```

---

# 🚀 UI Testing — Sauce Demo

## ✅ Implemented Scenarios

### Authentication

* Login with standard user
* Login with locked user
* Login with problem user
* Login with performance glitch user
* Logout validation

### Product Management

* Product filtering
* Product ordering
* Add products to cart
* Remove products from cart
* Product details validation

### Checkout Flow

* Complete purchase flow
* Checkout validation
* Error validation during checkout

### Navigation

* Navigation between pages
* Back to products validation

### Accessibility Testing

* Accessibility validation using Cypress Axe

### Responsive Testing

* Mobile viewport
* Tablet viewport
* Desktop viewport

---

# 🧪 API Testing — Restful Booker

## ✅ Implemented Scenarios

### Authentication

* Token generation
* Authentication validation

### Booking CRUD

* Create booking
* Get booking
* Update booking
* Delete booking

### Required Fields Validation

* Missing mandatory fields
* Invalid data validation

### Security Tests

* Invalid token validation
* Update without authentication
* Forbidden access validation

### Performance Tests

* Response time validation
* API response below 1000ms

### Automation via Scripts

* Automatic token storage
* Automatic booking id storage
* Automated assertions
* Environment variables

---

# 📸 Test Evidences

## UI Tests

Screenshots and recordings were added to:

```text
/evidences/ui-tests
```

## API Tests

Screenshots were added to:

```text
/evidences/api-tests
```

Examples:

* auth-success.png
* create-booking.png
* performance-create-booking.png
* security-invalid-token.png
* validation-missing-firstname.png

---

# ⚠️ Bugs and Observations

## Accessibility

Accessibility violations were identified during automated accessibility testing using Cypress Axe.

## API Validation

Some endpoints may accept invalid or incomplete payloads, which can generate inconsistent booking data.

## Security

Protected endpoints correctly return:

```text
403 Forbidden
```

when invalid authentication is provided.

---

# 🔍 Risk Analysis

## UI Risks

* Accessibility issues may impact usability
* Performance users may experience navigation delays
* Product filtering could behave inconsistently on different devices

## API Risks

* Missing validations may allow invalid bookings
* Weak authentication validation could expose sensitive operations
* Lack of strict schema validation may compromise data consistency

---

# 💡 Suggested Improvements

## UI

* Improve accessibility compliance
* Improve responsive behavior on smaller devices
* Add visual regression testing

## API

* Improve mandatory field validation
* Implement stricter authentication policies
* Add rate limiting protection
* Improve error messages and validation responses

---

# ▶️ How to Run UI Tests

## Install dependencies

```bash
npm install
```

## Run Cypress

```bash
npx cypress open
```

or

```bash
npx cypress run
```

---

# ▶️ How to Run API Tests

## Import into Postman

Import:

* Restful-Booker-Collection.json
* Restful-Booker-Environment.json

## Execute Collection

Use:

```text
Run Collection
```

inside Postman.

---

# 📌 Assumptions

* Sauce Demo environment was available during testing
* Restful Booker API was publicly accessible
* Test data was created dynamically during execution

---

# 👨‍💻 Author

Allyson da Cruz

QA Automation Testing Project
