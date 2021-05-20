// modified copy of @codemirror/basic-setup/dist/index.js

import {
	highlightSpecialChars,
	drawSelection,
	highlightActiveLine,
	keymap,
	EditorView,
} from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { history, historyKeymap } from "@codemirror/history";
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/gutter";
import { defaultKeymap } from "@codemirror/commands";
import { bracketMatching } from "@codemirror/matchbrackets";
import { closeBrackets, closeBracketsKeymap } from "@codemirror/closebrackets";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { rectangularSelection } from "@codemirror/rectangular-selection";
import { defaultHighlightStyle } from "@codemirror/highlight";
import { placeholder } from "@codemirror/view";
import { oneDark } from "@codemirror/theme-one-dark";
import { customTheme } from "./theme";
import { customKeyBindings } from "./keys";

const extensions = [
	// new items
	customKeyBindings,
	customTheme,
	oneDark,
	EditorView.lineWrapping,
	placeholder("Type or paste text here"),
	// mostly from basic setup, trimmed
	lineNumbers(),
	highlightActiveLineGutter(),
	highlightSpecialChars(),
	history(),
	drawSelection(),
	EditorState.allowMultipleSelections.of(true),
	defaultHighlightStyle.fallback,
	bracketMatching(),
	closeBrackets(),
	rectangularSelection(),
	highlightActiveLine(),
	highlightSelectionMatches(),
	keymap.of([
		...closeBracketsKeymap,
		...defaultKeymap,
		...searchKeymap,
		...historyKeymap,
	]),
];

export { extensions };
