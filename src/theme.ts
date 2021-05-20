import { EditorView } from "@codemirror/basic-setup";

const customTheme = EditorView.theme({
	"&": {
		height: "100%",
		color: "inherit",
	},
	".cm-scroller": {
		color: "inherit",
		fontFamily:
			'"JetBrains Mono", "Fira Code", Menlo, Monaco, "Courier New", monospace',
	},
	".cm-lineNumbers .cm-gutterElement": {
		padding: "0 1em",
	},
	".cm-panels.cm-panels-bottom": {
		position: "fixed",
		borderTop: "none",
		boxShadow: "0 0 50px rgba(0,0,0,0.5)",
	},
	".cm-button": {
		background: "transparent",
	},
	".cm-panel.cm-search": {
		padding: "1em",
	},
	'.cm-panel.cm-search [name="close"]': {
		color: "inherit",
		padding: "1em",
	},
	".cm-panel.cm-search input, .cm-panel.cm-search button, .cm-panel.cm-search label":
		{
			fontSize: "1em",
		},
	"&.cm-focused .cm-selectionBackground, ::selection": {
		backgroundColor: "#528bff",
	},
	".cm-selectionMatch": {
		backgroundColor: "#528bff55",
	},
	".cm-matchingBracket": {
		background: "transparent",
	},
	"&.cm-focused .cm-cursor": {
		borderLeftColor: "inherit",
		borderLeftWidth: "2px",
	},
});

export { customTheme };
