---
name: vscode
description: Editor-session hygiene for this repo. Use when the repo directory has just been moved or renamed, so the open editor is pointed at a stale path.
---

# VS Code

Keeping the editor session honest with the repo's actual location.

1. **A move or rename invalidates the open editor window.** After `mv`-ing or
   renaming this repo's directory, reopen it at the new path: `code <new-path>`.
   An editor left pointed at the old path shows a stale tree and its
   integrated terminal `cd`s back into a directory that no longer exists.
