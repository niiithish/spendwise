# 🚀 Project Roadmap: SpendWise (Mastering React)

This roadmap breaks down the `REQUIREMENTS.md` into manageable phases. Each phase focuses on a specific aspect of React mastery.

## 📍 Phase 1: Setup & Static UI (The Skeleton)
**Goal:** Get the infrastructure ready and build the visual shell.
- [X] **Initialize Project:** Set up Nextjs with TypeScript.
- [X] **Styling Setup:** Install Tailwind CSS and `shadcn/ui`.
- [X] **Component Structure:** Create the file structure as defined:
    - `components/ExpenseForm`
    - `components/ExpenseList`
    - `components/SummaryCards`
- [ ] **Static UI:** Build the look of the app using shadcn primitives (Card, Button, Input) with dummy data.
- [X] **Theme:** Implement the `ThemeProvider` for Dark/Light mode toggle.

## ⚡ Phase 2: Core Logic & CRUD (The Heart)
**Goal:** Make it work. Handle state, forms, and updates.
- [ ] **Context API:** Create `ExpenseContext` to manage the global `expenses` state.
- [ ] **Add Expense:** Wire up `ExpenseForm` to add items to the Context.
    - Implement manual form validation (Title required, Amount > 0).
- [ ] **Delete Expense:** Add delete functionality with a confirmation step.
- [ ] **Edit Expense:** Allow clicking an item to populate the form and update the existing record.
    - *Challenge:* Handle switching between "Add" and "Edit" modes.

## 🧠 Phase 3: Derived Data & Performance (The Brain)
**Goal:** Learn to derive data instead of duplicating state.
- [ ] **Derived Values:** Calculate these *on the fly* from the `expenses` array:
    - Total Balance
    - Monthly Spending
    - Highest Expense
- [ ] **Optimization:** Wrap these calculations in `useMemo` so they only run when needed.
- [ ] **Display:** Connect these values to your `SummaryCards`.

## 🔍 Phase 4: Filtering & Persistence (The User Experience)
**Goal:** Manage complex views and save data.
- [ ] **Filtering & Sorting:** Create a `Filters` component.
    - Filter by Category & Month.
    - Sort by Amount & Date.
    - *Crucial:* Ensure filtering just returns a *new view* of the data, never mutating the original `expenses` array.
- [ ] **Persistence:** Use `useEffect` to save to `localStorage` on change.
    - Load data when the app starts.
    - Handle empty states gracefully.

## 🏆 Phase 5: Polish & Review (The Mastery)
**Goal:** Final touches and code quality check.
- [ ] **Review Rules:** Check your code against the specific restrictions:
    - No `useEffect` abuse?
    - State living in the right place?
- [ ] **Stretch Goals (Optional):**
    - Add a Chart using `recharts`.
    - CSV Export.
    - Keyboard shortcuts.

---
**Next Step:** Start Phase 1 by setting up the project!
