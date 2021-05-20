import {
	cursorLineStart,
	selectLineStart,
	cursorLineEnd,
	selectLineEnd,
} from "@codemirror/commands";
import {
	selectNextOccurrence,
	selectSelectionMatches,
} from "@codemirror/search";
import { indentMore, indentLess } from "@codemirror/commands";
import { keymap } from "@codemirror/view";
import { Transaction } from "@codemirror/state";

const customKeyBindings = keymap.of([
	{
		key: "Mod-d",
		run: selectNextOccurrence,
		// if no more matches, the default action is invoked,
		// causing the bookmark menu to show up
		preventDefault: true,
	},
	{
		key: "Alt-ArrowLeft",
		mac: "Ctrl-ArrowLeft",
		run: cursorLineStart,
		shift: selectLineStart,
	},
	{
		key: "Alt-ArrowRight",
		mac: "Ctrl-ArrowRight",
		run: cursorLineEnd,
		shift: selectLineEnd,
	},
	{
		key: "Mod-d",
		run: selectNextOccurrence,
		shift: selectSelectionMatches,
	},
	{
		key: "Tab",
		run: ({ state, dispatch }) => {
			if (state.selection.ranges.filter((r) => !r.empty).length === 1) {
				// if we have exactly one selection, indent,
				// otherwise we insert \t at multiple selections
				return indentMore({ state, dispatch });
			}
			dispatch(
				state.update(state.replaceSelection("\t"), {
					scrollIntoView: true,
					annotations: Transaction.userEvent.of("input"),
				})
			);
			return true;
		},
		shift: indentLess,
	},
]);

export { customKeyBindings };
