<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Copy from '$lib/assets/Copy.svelte';
	import { debounce } from '$lib/utils/debounce';

	let { data }: { data: { name: string; age: number; count: number } | null } = $props();
	const searchParams = page.url.searchParams;

	let name = $state(searchParams.get('name') ?? '');
	let copied = $state(false);

	const updateQuery = debounce((newName: string) => {
		goto(`/?name=${encodeURIComponent(newName)}`);
	}, 600);

	const copyLink = () => {
		navigator.clipboard.writeText(window.location.href);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	};

	$effect(() => {
		updateQuery(name);
	});
</script>

<main>
	<div class="title-container">
		<h1 class="title">Estimador de Idade</h1>
		<p class="subtitle">Estime a idade com base no nome!</p>
	</div>

	<div class="glass-container">
		<input
			type="text"
			placeholder="Digite um nome..."
			aria-label="Digite um nome para estimar a idade"
			bind:value={name}
		/>
	</div>

	<div class="result-container">
		{#if name && data?.name === name}
			<p class="result-text">
				{#if data.age}
					👤 O nome <span class="marked-text">{data.name}</span> tem uma idade média de
					<span class="marked-text">{data.age}</span>
					anos (com base em {data.count} registros)
				{:else}
					Nenhum resultado para <span class="marked-text">{data.name}</span>
				{/if}
			</p>
			<button class="copy-btn" onclick={copyLink} aria-label="Copiar link">
				<Copy />
			</button>
			{#if copied}
				<span class="copied-feedback">Link copiado!</span>
			{/if}
		{:else if name}
			<div class="loading-spin"></div>
		{/if}
	</div>
</main>

<style>
	:global(body) main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2em;
	}

	.title-container {
		border-left: 5px solid rgb(244, 246, 135);
		padding-left: 20px;
		display: flex;
		flex-direction: column;
	}

	.title {
		font-size: 3em;
	}

	.subtitle {
		font-size: 2em;
	}

	.glass-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2em;
		width: 100%;
		max-width: 600px;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(5px);
		padding: 2rem;
		border-radius: 5px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		text-align: center;
		transition: all 400ms;
	}

	:global(body.dark-mode) .glass-container {
		background: rgba(0, 0, 0, 0.2);
	}

	input {
		width: 100%;
		padding: 15px;
		font-size: 1.1rem;
		border-radius: 5px;
		border: none;
		color: #2b2b2b;
		transition: outline 50ms;
	}

	input:hover,
	input:focus {
		outline: 3px solid rgb(244, 246, 135);
		transition: outline 50ms;
	}

	:global(body.dark-mode) input {
		color: #fff;
		background-color: #2b2b2b;
	}

	.result-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		max-width: 300px;
	}

	.result-text {
		font-weight: 600;
		font-size: 1.1em;
		opacity: 0;
		line-height: 1.5;
		animation: fadeIn 0.5s forwards;
	}

	.marked-text {
		color: rgb(244, 246, 135);
	}

	.loading-spin {
		width: 48px;
		height: 48px;
		border: 5px solid #fff;
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: spin 1s infinite linear;
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	@keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	.copy-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5em;
		border-radius: 50%;
		width: 45px;
		height: 45px;
		margin: 1em 0 0.5em 0;
		opacity: 0;
		transition: all 400ms;
		animation: fadeIn 0.3s forwards;
	}

	.copy-btn:hover {
		background: rgba(244, 246, 135, 0.2);
	}

	.copied-feedback {
		margin-left: 10px;
		font-size: 0.95em;
		opacity: 0;
		animation: fadeIn 0.3s forwards;
	}
</style>
