# ✅ The Expense Tracker I Want You To Build

**Project Name (optional)**
SpendWise / Ledger / TrackIt (name doesn’t matter)

**Goal**
Build a single-user personal finance tracker that feels like a real product, not a demo.

## 🔹 Core Features (MUST HAVE)

### 1. Expense CRUD (No shortcuts)
Each expense has:
- `id`
- `title`
- `amount`
- `category`
- `date`

You must support:
- Add
- Edit (inline or modal)
- Delete (with confirm)

💡 **Editing is where many React beginners fail — do it properly.**

### 2. Derived Data (NO STATE CHEATING ❌)
**Do not store:**
- Total spent
- Category totals
- Monthly totals

**Instead:**
- Compute them from expenses using `useMemo`

You should have:
- Total spent this month
- Highest expense
- Average per day

### 3. Filtering & Sorting
- Filter by category
- Filter by month

Sort by:
- Amount
- Date

⚠️ **Filters should not mutate original data**

### 4. Persistent Storage
- Save expenses to `localStorage`
- Load on app start

**Edge cases:**
- Empty state
- Corrupt `localStorage` data

### 5. Dark / Light Mode
- Global theme toggle
- Persisted
- CSS variables or Tailwind dark mode

---

## 🔸 UI Requirements (Important)
This is where shadcn/ui comes in.

### ✅ Allowed shadcn components
Use them only as primitives:
- Button
- Input
- Select
- Dialog
- Card

### ❌ NOT allowed
- Prebuilt dashboards
- Full layout examples
- Copying demo code logic

**Rule:**
shadcn = HTML replacement, not app logic.
If your app still works when you replace shadcn with `<button>` and `<input>`, you’re doing it right.

---

## 🧠 Component Structure (You MUST follow this)
```
App
 ├─ ThemeProvider
 ├─ ExpenseProvider
 │   ├─ ExpenseForm
 │   ├─ Filters
 │   ├─ ExpenseList
 │   │   └─ ExpenseItem
 │   ├─ SummaryCards
 │   └─ Charts (optional)
```

---

## ⚙️ State Rules (Very Important)

**Where state should live:**
- `expenses` → Context or App level
- `filters` → Local state
- `form state` → Inside form component

**Hooks you MUST use correctly:**
- `useState`
- `useEffect`
- `useMemo`
- `useContext`

❌ **No Redux**
❌ **No Zustand (yet)**
❌ **No React Query**

---

## 🧪 Validation Rules
- Amount must be positive
- Date cannot be future
- Title required
- **No form libraries yet** — write validation yourself.

---

## 🔥 Stretch Goals (After Core)
Only after finishing everything above:
- Category budgets + warnings
- CSV export
- Charts (Recharts)
- Keyboard shortcuts
- Undo delete

---

## 🚦 When You’re Done, You Should Be Able To Answer:
If you can explain these, you mastered this level:
- Why some data is derived and not stored
- Why `useMemo` is needed
- Why filters don’t mutate original state
- Why Context is enough here

**Verdict on shadcn/ui**
✔️ Yes, use it
✔️ It’s production-quality
✔️ You still learn React

❗ **But if you rely on shadcn for logic → you lose learning value.**