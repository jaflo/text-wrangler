<script lang="ts">
	export let content = "";

	import { onDestroy, onMount } from "svelte";
	import { EditorState, EditorView } from "@codemirror/basic-setup";
	import { extensions } from "./extensions";

	let editor;

	onMount(() => {
		editor = new EditorView({
			state: EditorState.create({
				extensions: [...extensions],
				doc: content,
			}),
			parent: document.getElementById("editor"),
		});
		editor.focus();
	});

	onDestroy(() => {
		editor.destroy();
	});
</script>

<div id="editor" />

<style>
	#editor {
		flex: 1;
		font-size: 14px;
	}
</style>
