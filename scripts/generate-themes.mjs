/**
 * Generate Afterglow Monokai theme for Cursor / VS Code.
 * Run: node scripts/generate-themes.mjs
 *
 * Syntax from Afterglow-monokai.tmTheme (+ Ruby/Cursor scope extras).
 * Chrome: dark Afterglow surfaces (editor #1C1C1C, lighter inputs/title bar).
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const themesDir = join(root, "themes");

function workbenchClassic(g) {
  // Darker than original Sublime #2E2E2E and a notch below main Afterglow #252525
  const bg = "#1C1C1C";
  const fg = g.foreground || "#d6d6d6";
  const caret = g.caret || "#A7A7A7";
  const selection = g.selection || "#DDF0FF33";
  // Slightly stronger line highlight so it still reads on the darker bg
  const lineHighlight = g.lineHighlight === "#FFFFFF08" ? "#FFFFFF10" : g.lineHighlight || "#252525";
  const invisibles = g.invisibles || "#FFFFFF40";
  // Chrome tracks the deeper editor
  const sidebar = "#161616";
  const status = "#121212";
  const selected = "#2A2A2A";
  const hover = "#242424";
  // Still lighter than editor so text fields / chat compose boxes stand out
  const input = "#2A2A2A";
  const muted = "#747474";
  const soft = "#A0A0A0";
  const bright = "#E8E8E8";
  const border = "#121212";
  const widget = "#303030";
  // Subtle gold accent for borders / highlights (not primary buttons)
  const accent = "#E5B567";
  // VS Code–style blue for buttons / badges (avoids loud yellow CTAs)
  const buttonBg = "#0E639C";
  const buttonHover = "#1177BB";
  // Soft selection companions derived from scheme selection when 8-digit, else slate
  const selSoft = selection.length === 9 ? selection.slice(0, 7) + "22" : "#5A647E55";
  const selWash = selection.length === 9 ? selection.slice(0, 7) + "18" : "#5A647E33";

  return {
    "editor.background": bg,
    "editor.foreground": fg,
    "editorLineNumber.foreground": muted,
    "editorLineNumber.activeForeground": soft,
    "editorCursor.foreground": caret,
    "editor.selectionBackground": selection,
    "editor.inactiveSelectionBackground": selSoft,
    "editor.selectionHighlightBackground": selWash,
    "editor.wordHighlightBackground": "#FFFFFF12",
    "editor.wordHighlightStrongBackground": "#FFFFFF18",
    "editor.findMatchBackground": (g.findHighlight || "#FFE792") + "66",
    "editor.findMatchHighlightBackground": (g.findHighlight || "#FFE792") + "33",
    "editor.findRangeHighlightBackground": selWash,
    "editor.lineHighlightBackground": lineHighlight,
    "editor.lineHighlightBorder": "#00000000",
    "editor.rangeHighlightBackground": "#FFFFFF0A",
    "editorWhitespace.foreground": invisibles,
    "editorIndentGuide.background1": "#333333",
    "editorIndentGuide.background2": "#333333",
    "editorIndentGuide.background3": "#333333",
    "editorIndentGuide.background4": "#333333",
    "editorIndentGuide.background5": "#333333",
    "editorIndentGuide.background6": "#333333",
    "editorIndentGuide.activeBackground1": "#4A4A4A",
    "editorIndentGuide.activeBackground2": "#4A4A4A",
    "editorIndentGuide.activeBackground3": "#4A4A4A",
    "editorIndentGuide.activeBackground4": "#4A4A4A",
    "editorIndentGuide.activeBackground5": "#4A4A4A",
    "editorIndentGuide.activeBackground6": "#4A4A4A",
    "editorRuler.foreground": "#333333",
    "editorBracketMatch.background": "#FFFFFF12",
    "editorBracketMatch.border": soft,
    "editorOverviewRuler.border": border,
    "editorError.foreground": "#c45330",
    "editorWarning.foreground": "#e5b567",
    "editorInfo.foreground": "#6c99bb",
    "editorGutter.background": bg,
    "editorGutter.modifiedBackground": "#cc7732",
    "editorGutter.addedBackground": "#b4c973",
    "editorGutter.deletedBackground": "#90516b",
    "editorCodeLens.foreground": muted,
    "editorBracketHighlight.foreground1": "#CDA869",
    "editorBracketHighlight.foreground2": "#9B859D",
    "editorBracketHighlight.foreground3": "#8F9D6A",
    "editorBracketHighlight.foreground4": "#CF6A4C",
    "editorBracketHighlight.foreground5": "#7587A6",
    "editorBracketHighlight.foreground6": "#9B703F",
    "editorInlayHint.foreground": muted,
    "editorInlayHint.background": "#00000000",
    "editorStickyScroll.background": bg,
    "editorStickyScrollHover.background": hover,
    "editorGroup.border": border,
    "editorGroupHeader.tabsBackground": sidebar,
    "editorGroupHeader.noTabsBackground": sidebar,
    "editorGroupHeader.tabsBorder": border,
    "editorGroup.dropBackground": "#FFFFFF10",

    "tab.activeBackground": bg,
    "tab.activeForeground": bright,
    "tab.inactiveBackground": sidebar,
    "tab.inactiveForeground": muted,
    "tab.border": border,
    "tab.activeBorderTop": "#00000000",
    "tab.unfocusedActiveBackground": bg,
    "tab.unfocusedActiveForeground": soft,
    "tab.unfocusedInactiveBackground": sidebar,
    "tab.unfocusedInactiveForeground": muted,
    "tab.hoverBackground": hover,
    "tab.hoverForeground": bright,
    "tab.activeModifiedBorder": accent,
    "tab.inactiveModifiedBorder": "#E5B56766",

    "activityBar.background": status,
    "activityBar.foreground": soft,
    "activityBar.inactiveForeground": muted,
    "activityBar.border": border,
    "activityBar.activeBorder": accent,
    "activityBar.activeBackground": "#00000000",
    "activityBarBadge.background": buttonBg,
    "activityBarBadge.foreground": "#FFFFFF",
    "activityBarTop.foreground": soft,
    "activityBarTop.activeBorder": accent,
    "activityBarTop.inactiveForeground": muted,

    "sideBar.background": sidebar,
    "sideBar.foreground": "#C8C8C8",
    "sideBar.border": border,
    "sideBarTitle.foreground": soft,
    "sideBarSectionHeader.background": sidebar,
    "sideBarSectionHeader.foreground": bright,
    "sideBarSectionHeader.border": border,

    "list.activeSelectionBackground": selected,
    "list.activeSelectionForeground": bright,
    "list.inactiveSelectionBackground": "#363636AA",
    "list.inactiveSelectionForeground": fg,
    "list.hoverBackground": hover,
    "list.hoverForeground": "#D3D3D3",
    "list.focusBackground": selected,
    "list.focusForeground": bright,
    "list.focusOutline": "#00000000",
    "list.highlightForeground": accent,
    "list.dropBackground": "#FFFFFF15",
    "list.errorForeground": "#c45330",
    "list.warningForeground": "#e5b567",
    "tree.indentGuidesStroke": "#333333",

    "titleBar.activeBackground": input,
    "titleBar.activeForeground": soft,
    "titleBar.inactiveBackground": hover,
    "titleBar.inactiveForeground": muted,
    "titleBar.border": "#3A3A3A",

    // Classic Afterglow: dark status bar, muted labels (not solid gold)
    "statusBar.background": status,
    "statusBar.foreground": muted,
    "statusBar.border": border,
    "statusBar.debuggingBackground": "#c45837",
    "statusBar.debuggingForeground": bright,
    "statusBar.noFolderBackground": status,
    "statusBar.noFolderForeground": muted,
    "statusBarItem.hoverBackground": hover,
    "statusBarItem.remoteBackground": "#2A2A2A",
    "statusBarItem.remoteForeground": soft,
    "statusBarItem.errorBackground": "#c45330",
    "statusBarItem.errorForeground": bright,
    "statusBarItem.warningBackground": "#e5b567",
    "statusBarItem.warningForeground": "#1E1E1E",

    "panel.background": bg,
    "panel.border": border,
    "panelTitle.activeForeground": bright,
    "panelTitle.inactiveForeground": muted,
    "panelTitle.activeBorder": accent,
    "terminal.background": bg,
    "terminal.foreground": fg,
    "terminal.ansiBlack": "#1E1E1E",
    "terminal.ansiRed": "#CF6A4C",
    "terminal.ansiGreen": "#8F9D6A",
    "terminal.ansiYellow": "#CDA869",
    "terminal.ansiBlue": "#7587A6",
    "terminal.ansiMagenta": "#9B859D",
    "terminal.ansiCyan": "#AFC4DB",
    "terminal.ansiWhite": "#d6d6d6",
    "terminal.ansiBrightBlack": "#797979",
    "terminal.ansiBrightRed": "#CF6A4C",
    "terminal.ansiBrightGreen": "#DAEFA3",
    "terminal.ansiBrightYellow": "#F9EE98",
    "terminal.ansiBrightBlue": "#7587A6",
    "terminal.ansiBrightMagenta": "#9B859D",
    "terminal.ansiBrightCyan": "#AFC4DB",
    "terminal.ansiBrightWhite": "#F8F8F8",
    "terminal.selectionBackground": selection.length === 9 ? selection : selSoft,
    "terminalCursor.foreground": caret,
    "terminal.border": border,

    "input.background": input,
    "input.foreground": fg,
    "input.border": "#3A3A3A",
    "input.placeholderForeground": muted,
    "inputOption.activeBorder": accent,
    "inputOption.activeBackground": "#E5B56733",
    "dropdown.background": input,
    "dropdown.foreground": fg,
    "dropdown.border": "#3A3A3A",
    "dropdown.listBackground": widget,
    "button.background": buttonBg,
    "button.foreground": "#FFFFFF",
    "button.hoverBackground": buttonHover,
    "button.secondaryBackground": selected,
    "button.secondaryForeground": bright,
    "checkbox.background": input,
    "checkbox.foreground": buttonBg,
    "checkbox.border": "#3A3A3A",
    "badge.background": buttonBg,
    "badge.foreground": "#FFFFFF",
    "progressBar.background": buttonBg,

    "inlineChat.background": widget,
    "inlineChat.foreground": fg,
    "inlineChat.border": "#3A3A3A",
    "inlineChatInput.background": input,
    "inlineChatInput.border": "#3A3A3A",
    "inlineChatInput.focusBorder": accent,
    "inlineChatInput.placeholderForeground": muted,
    "chat.requestBackground": hover,
    "chat.requestBubbleBackground": input,
    "chat.requestBubbleHoverBackground": selected,
    "chat.requestBorder": "#3A3A3A",
    "chat.slashCommandBackground": selected,
    "chat.slashCommandForeground": accent,
    "chat.avatarBackground": selected,
    "chat.avatarForeground": soft,

    "scrollbar.shadow": "#00000055",
    "scrollbarSlider.background": "#3C3C3C99",
    "scrollbarSlider.hoverBackground": "#515151AA",
    "scrollbarSlider.activeBackground": "#515151CC",

    "widget.shadow": "#00000066",
    "editorWidget.background": widget,
    "editorWidget.foreground": fg,
    "editorWidget.border": "#3A3A3A",
    "editorSuggestWidget.background": widget,
    "editorSuggestWidget.border": "#3A3A3A",
    "editorSuggestWidget.foreground": soft,
    "editorSuggestWidget.highlightForeground": accent,
    "editorSuggestWidget.selectedBackground": selected,
    "editorSuggestWidget.selectedForeground": bright,
    "editorHoverWidget.background": widget,
    "editorHoverWidget.border": "#3A3A3A",
    "editorHoverWidget.foreground": fg,
    "peekView.border": accent,
    "peekViewEditor.background": "#2A2A2A",
    "peekViewEditor.matchHighlightBackground": "#FFE79244",
    "peekViewResult.background": sidebar,
    "peekViewResult.fileForeground": fg,
    "peekViewResult.lineForeground": soft,
    "peekViewResult.matchHighlightBackground": "#FFE79244",
    "peekViewResult.selectionBackground": selected,
    "peekViewResult.selectionForeground": bright,
    "peekViewTitle.background": status,
    "peekViewTitleDescription.foreground": muted,
    "peekViewTitleLabel.foreground": bright,

    "quickInput.background": widget,
    "quickInput.foreground": fg,
    "quickInputList.focusBackground": selected,
    "quickInputList.focusForeground": bright,
    "pickerGroup.border": "#3A3A3A",
    "pickerGroup.foreground": accent,
    "commandCenter.background": input,
    "commandCenter.foreground": soft,
    "commandCenter.border": "#3A3A3A",
    "commandCenter.activeBackground": selected,
    "commandCenter.activeForeground": bright,
    "commandCenter.inactiveForeground": muted,

    "menu.background": widget,
    "menu.foreground": fg,
    "menu.selectionBackground": selected,
    "menu.selectionForeground": bright,
    "menu.separatorBackground": "#3A3A3A",
    "menu.border": "#3A3A3A",

    "notifications.background": widget,
    "notifications.foreground": fg,
    "notifications.border": "#3A3A3A",
    "notificationCenterHeader.background": status,
    "notificationCenterHeader.foreground": soft,
    "notificationLink.foreground": accent,

    "breadcrumb.foreground": muted,
    "breadcrumb.focusForeground": bright,
    "breadcrumb.activeSelectionForeground": bright,
    "breadcrumbPicker.background": widget,

    "gitDecoration.addedResourceForeground": "#8F9D6A",
    "gitDecoration.modifiedResourceForeground": "#CDA869",
    "gitDecoration.deletedResourceForeground": "#CF6A4C",
    "gitDecoration.untrackedResourceForeground": "#cccccc",
    "gitDecoration.ignoredResourceForeground": "#999999",
    "gitDecoration.conflictingResourceForeground": "#e5b567",
    "gitDecoration.stageModifiedResourceForeground": accent,

    "diffEditor.insertedTextBackground": "#253B2255",
    "diffEditor.removedTextBackground": "#420E0955",
    "diffEditor.insertedLineBackground": "#253B2233",
    "diffEditor.removedLineBackground": "#420E0933",
    "diffEditor.border": border,

    "debugToolBar.background": widget,
    "debugToolBar.border": "#3A3A3A",
    "debugIcon.breakpointForeground": "#CF6A4C",
    "debugIcon.startForeground": "#8F9D6A",
    "debugIcon.pauseForeground": accent,
    "debugIcon.stopForeground": "#CF6A4C",

    "focusBorder": "#E5B56766",
    "foreground": fg,
    "disabledForeground": muted,
    "errorForeground": "#c45330",
    "descriptionForeground": muted,
    "icon.foreground": soft,
    "selection.background": selection,
    "textLink.foreground": "#7587A6",
    "textLink.activeForeground": "#AFC4DB",
    "textPreformat.foreground": "#CDA869",
    "textBlockQuote.background": sidebar,
    "textBlockQuote.border": accent,
    "textCodeBlock.background": sidebar,
    "settings.headerForeground": bright,
    "settings.modifiedItemIndicator": accent,
    "settings.focusedRowBackground": hover,
    "minimap.selectionHighlight": selection,
    "minimap.findMatchHighlight": "#FFE79288",
    "minimap.errorHighlight": "#CF6A4C",
    "minimap.warningHighlight": "#e5b567",
    "minimapGutter.addedBackground": "#8F9D6A",
    "minimapGutter.modifiedBackground": "#CDA869",
    "minimapGutter.deletedBackground": "#CF6A4C",
    "sash.hoverBorder": "#E5B56766",
  };
}

/** Cursor/VS Code extras on top of the original Monokai.tmTheme scopes */
function monokaiExtras() {
  return [
    {
      name: "Operators",
      scope: ["keyword.operator", "punctuation"],
      settings: { foreground: "#d6d6d6" },
    },
    {
      name: "Template string",
      scope: ["string.template"],
      settings: { foreground: "#e5b567" },
    },
    {
      name: "JSON key",
      scope: "support.type.property-name.json",
      settings: { foreground: "#b4c973" },
    },
    {
      name: "Instance / class / global variables (@foo, @@bar, $baz)",
      scope: [
        "variable.other.readwrite.instance",
        "variable.other.readwrite.instance.ruby",
        "variable.other.readwrite.class",
        "variable.other.readwrite.class.ruby",
        "variable.other.readwrite.global",
        "variable.other.readwrite.global.ruby",
        "punctuation.definition.variable.ruby",
        "variable.other.readwrite.instance.coffee",
      ],
      settings: { foreground: "#E87D3E" },
    },
    {
      name: "Ruby parameters",
      scope: [
        "variable.parameter",
        "variable.parameter.function",
        "variable.parameter.function.ruby",
      ],
      settings: { foreground: "#E87D3E", fontStyle: "italic" },
    },
  ];
}

function buildMonokai() {
  const raw = JSON.parse(
    readFileSync(join(__dirname, "monokai-from-tmtheme.json"), "utf8")
  );
  return {
    name: "Afterglow Monokai",
    type: "dark",
    semanticHighlighting: false,
    colors: workbenchClassic(raw.global),
    tokenColors: [...raw.tokenColors, ...monokaiExtras()],
  };
}

mkdirSync(themesDir, { recursive: true });
const theme = buildMonokai();
const out = join(themesDir, "afterglow-monokai-color-theme.json");
writeFileSync(out, JSON.stringify(theme, null, 2) + "\n");
console.log(`Wrote ${out} (${theme.tokenColors.length} token rules)`);
