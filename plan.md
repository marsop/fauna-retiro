1. **Add `ThemeProvider` context**
   - Create `src/components/theme-provider.tsx` to handle dark mode context and local storage syncing.
2. **Add `ModeToggle` component**
   - Create `src/components/mode-toggle.tsx` containing a button to toggle the dark mode theme.
3. **Wrap application in `ThemeProvider`**
   - Update `src/main.tsx` to wrap the `RouterProvider` with `ThemeProvider` so context is globally available.
4. **Add `ModeToggle` to Header**
   - Update `src/components/ProgressHeader.tsx` to include the `ModeToggle` button alongside the language toggle.
5. **Pre-commit step**
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
6. **Submit**
   - Commit the changes and submit the branch.
