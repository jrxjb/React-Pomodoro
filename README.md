# Pomodoro Timer

A **Pomodoro countdown** app built with **React 19 + TypeScript + Vite**, perfect
for staying focused while studying or working.

![pomodoro screenshot](./pomodoro/screenshot.png)

## Features

- **Focus countdown**: pick how many focus minutes (default 25) and hit Start.
- **Live progress**: time displayed in `mm:ss` plus a progress bar.
- **Pause & Restart**: freeze time whenever you need a break and resume where you left off.
- **Automatic stop**: reaches 00:00, shows a "Break time!" message and stops.
- **Dark / Light theme**: toggle theme with a single click (persisted via React Context).

## Tech stack

- React 19
- TypeScript
- Vite
- Hooks: `useRef`, `useMemo`, `useId`, `useContext`

## Why these hooks

- **`useRef`** keeps the `setInterval` id without triggering re-renders.
- **`useMemo`** computes `mm:ss` and progress % only when time actually changes.
- **`useId`** generates stable, unique ids for form labels.
- **`useContext`** provides the theme to the timer without prop drilling.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Technical notes

The full implementation checklist, manual verification table and acceptance
criteria used to build this project live in
[`TECHNICAL-TEST.md`](./TECHNICAL-TEST.md).