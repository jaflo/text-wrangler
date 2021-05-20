<script lang="ts">
	import Editor from "./Editor.svelte";

	let mod = navigator && /Mac/.test(navigator.platform) ? "Cmd" : "Ctrl";
</script>

<main>
	<div class="hints">
		<div>
			<kbd>{mod}-D</kbd>
			<div>
				Select the next instance of the selection (Add Shift to select
				all matches).
			</div>
		</div>
		<div>
			<kbd>{mod}-click</kbd>
			<div>Place another cursor.</div>
		</div>
		<div>
			<kbd>Alt-drag</kbd>
			<div>Create a rectangular selection.</div>
		</div>
		<div>
			<kbd>Alt-&larr;/&rarr;</kbd>
			<div>Jump to start/end of line.</div>
		</div>
	</div>
	<Editor />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.hints {
		padding: 1em;
	}

	.hints > div {
		position: relative;
	}

	.hints > div > div {
		margin-left: 80px;
	}

	kbd {
		background: #2c313a;
		font: inherit;
		font-size: 0.7em;
		padding: 0.1em 1em;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
