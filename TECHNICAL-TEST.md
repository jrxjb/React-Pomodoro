# Technical test — Pomodoro Timer (useRef + useMemo + useId + useContext intro)

Exercise spec used to build the Pomodoro project. Goal: a timer where `useRef`
controls the interval WITHOUT re-rendering, `useMemo` computes `mm:ss` and %
progress, `useId` generates the input label and `useContext` (intro) provides a
dark/light theme.

## Requirements

- The user picks how many **focus minutes** they want (default **25**).
- Press **Start** to begin the countdown in `mm:ss` format with a progress bar.
- **Pause** and **Restart** controls.
- When it reaches `00:00`: show a "Break time!" message and stop.
- **Dark/Light theme** toggle reading from a context.

## Implementation checklist

### useRef (star of the day)
- [ ] The `setInterval` **id lives in `useRef`** (not a plain variable, not state).
- [ ] **Start** does not create 2 intervals: if `ref.current` exists → `clearInterval` first.
- [ ] **Pause**: `clearInterval` and keep the remaining time.
- [ ] **Restart**: `clearInterval` + back to the initial minutes + `mm:ss` to 0.
- [ ] Clean up the interval on **unmount** (`useEffect` cleanup).

### useMemo
- [ ] `mm:ss` formatted with `useMemo`.
- [ ] **% progress** with `useMemo` (elapsed / total * 100).
- [ ] Can explain why `mm:ss` is NOT computed with `useState`.

### useId
- [ ] The `<label htmlFor>` of the minutes input uses a `useId`-generated id (not a fixed "minutos").

### useContext (intro)
- [ ] `ThemeContext` (light/dark) with its provider in `App` and a toggle button.
- [ ] Exactly **1 component** reads the value with `useContext` (the main timer).
- [ ] Default value provided in `createContext` when there's no provider.

### General
- [ ] Clear states: `secondsLeft` (or similar), `running` (bool), `minutes` (from input).
- [ ] Controlled input + form with `preventDefault` (no page reload).
- [ ] Descriptive naming everywhere.
- [ ] No dead/commented code at the end.

## Interview points

1. **"Start" twice → 2 intervals**: the classic double-tick bug. Interview answer:
   keep the id in `useRef` and `clearInterval` before creating another.
2. **Why not `useState` for the interval id?** → mutating state re-renders.
3. **Time's up?** → in the tick, if `seconds === 0` → `clearInterval` + `running=false` + message.
4. **`setInterval` and stale value**: use the functional update `setSeconds(s => s - 1)`
   to avoid reading the old value from the closure.
5. **Input while running**: disable the input/Start while `running` (correct UX).

## Manual verification

| Action | Expected result |
|---|---|
| Initial load | `25:00`, 0% bar, Start enabled, labeled input |
| Start | Counts down once per second, no skipping |
| **Double click Start** | **Only 1 interval** running |
| Pause | Time freezes; resume continues where it left off |
| Change minutes + restart | Back to `mm:ss` of the new value, bar at 0 |
| Reach 0 (test with 0:0x) | "Break time!" message + stops on its own |
| Theme button | Switches to dark and timer renders with it (no reload) |
| Close/reopen tab (or unmount) | No hanging intervals (cleanup ok) |

## Acceptance criteria

1. `npm run build` compiles TypeScript with no errors.
2. The interval id lives in `useRef` + cleanup on unmount.
3. **Double clicking Start does NOT double the tick** (tested in browser).
4. `useMemo` for `mm:ss` and % progress.
5. `useId` on the label; `ThemeContext` read by 1 component; no secrets or dead code.
6. Descriptive naming across the code.