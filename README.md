# Afterglow Monokai for Cursor / VS Code

**Inspired by** [YabataDesign/afterglow-theme](https://github.com/YabataDesign/afterglow-theme) — the classic minimal dark theme for Sublime Text.

This is a Cursor / VS Code port of Afterglow’s **Monokai** color scheme: warm charcoal UI, pink keywords, gold strings, purple constants, and orange instance variables / parameters.

Works in **Cursor** and **VS Code**.

## Install

### From VSIX

```bash
npm install -g @vscode/vsce
vsce package --allow-missing-repository
cursor --install-extension ./afterglow-theme-1.0.0.vsix
```

Or: `Cmd+Shift+P` → **Extensions: Install from VSIX…**

### From Cursor Extensions (Open VSX)

Search **Afterglow Monokai** (publisher `pkayokay`) after publishing to Open VSX.

### Activate

**Preferences: Color Theme** → **Afterglow Monokai**

```json
{
  "workbench.colorTheme": "Afterglow Monokai"
}
```

## Develop

```bash
node scripts/generate-themes.mjs   # regenerate themes/afterglow-monokai-color-theme.json
vsce package
cursor --install-extension ./afterglow-theme-1.0.0.vsix --force
```

## Credits / inspiration

This theme is inspired by and based on the look of:

- **[YabataDesign/afterglow-theme](https://github.com/YabataDesign/afterglow-theme)** — original Sublime Text Afterglow theme & Afterglow Monokai scheme  
- [Spacegray](https://github.com/kkga/spacegray) — UI roots of Afterglow  
- [Monokai](https://monokai.pro/) / idlefingers — syntax lineage  

Not affiliated with the original authors; color values reimplemented for VS Code / Cursor.

## License

MIT — see [LICENSE](./LICENSE).
