# Playwright Automation Architecture 🚀

[![Playwright Tests](https://github.com/yourusername/reponame/actions/workflows/playwright.yml/badge.svg)](https://github.com/yourusername/reponame/actions)
[![Allure Report](https://img.shields.io/badge/Allure%20Report-View-blue)](https://yourusername.github.io/reponame)
[![Playwright](https://img.shields.io/badge/Playwright-1.43-green)](https://playwright.dev/)

A production-grade, highly scalable UI and API automation framework built with **Playwright (TypeScript)**. Designed to demonstrate enterprise-level architecture directly applicable to modern SaaS startups.

## 🎯 Business Value
Why this framework is valuable for high-velocity SaaS engineering teams:
* **Early Defect Detection**: Integrated API + UI validation allows bugs to be caught before reaching production.
* **Rapid Execution**: Fully utilizes Playwright's parallel capabilities, sharding, and matrix CI/CD capabilities.
* **Low Maintenance**: Robust abstractions (Page Object Model + Fixtures) avoid code duplication and flaky tests.
* **Clear Insights**: Integrated **Allure Reporting** provides unambiguous metric tracking for POs, QA, and devs.

## 🧠 Architectural Highlights
- **Page Object Model (POM)**: Separation of locators from logic (`src/pages`).
- **Custom Playwright Fixtures**: Context aware base classes allowing clean dependency injections (`src/fixtures`).
- **Hybrid Testing (UI + API)**: Isolated pure API tests and hybrid tests where state is primed via API.
- **Dynamic Data Generation**: Fully stateless execution relying on `@faker-js/faker` and pure APIs.
- **CI/CD Driven**: Readily implemented GitHub Action matrix workflows (`.github/workflows`).

## 📁 Repository Structure
```
├── .github/workflows     # CI/CD configurations
├── src/
│   ├── api/              # API Clients and wrappers
│   ├── data/             # Static JSON test profiles
│   ├── fixtures/         # Playwright extensions and state injections
│   ├── pages/            # Page Object encapsulation
│   └── utils/            # Data generation and logging
├── tests/
│   ├── api/              # Pure API contract and functional validation
│   └── ui/               # E2E cross-browser interactions
├── playwright.config.ts  # Playwright & environment strategy
└── package.json          # Dependency management
```

## 💻 Tech Stack
- **Testing Engine**: Playwright
- **Language**: TypeScript
- **Assertions**: Playwright Test Runner
- **Reporting**: Allure Reports / HTML Reporter
- **Data Gen**: Faker.js

## 🚀 Setup & Execution

### Prerequisites
- Node.js > 18.x

### 1. Install Dependencies
```bash
npm install
npx playwright install --with-deps
```

### 2. Local Execution
```bash
# Run all tests sequentially
npm run test

# Run UI tests only against Chromium
npm run test:ui

# Run Headed (Watch Mode)
npm run test:headed

# Run API Tests only
npm run test:api
```

### 3. Generate Reports
To parse the output and view the rich Allure diagnostics dashboard:
```bash
npm run report:generate
npm run report:open
```

## 💡 Use Case Examples

**1. Creating Flaky-Free Workflows**
Instead of clicking 10 times to get to a state, we use `src/api/AuthApi.ts` to bypass UI login, inject cookies dynamically, and start UI tests exactly where needed. This trims wait times by >50%.

**2. Dynamic Test Coverage**
Test data isn't hardcoded. `DataGenerator` builds deterministic, randomly skewed identities allowing boundary testing natively across browsers.

---
> *Developed as an enterprise structural showcase for advanced QA automation paradigms.*
