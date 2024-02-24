<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Todo } from '../controls/todo/types';

	// type Props = {
	// 	todo: Todo;
	// 	toggleMode: (id: number) => void;
	// 	removeTodo: (id: number) => void;
	// };

	// export let props: Props;

	// let { todo, toggleMode, removeTodo } = props;

	export let todo: Todo;
	export let toggleMode: (id: number) => void;
	export let removeTodo: (id: number) => void;

	$: console.log(todo);
	$: {
		// todo = todo;
	}

	const dispatch = createEventDispatcher<{ add: { message: string } }>();

	function addMessage() {
		dispatch('add', { message: `update ${todo.text}` });
	}
</script>

<li>
	{#if todo.mode === 'edit'}
		<input bind:value={todo.text} />
		<button
			on:click={() => {
				addMessage();
				toggleMode(todo.id);
			}}>확인</button
		>
	{:else}
		<div>{todo.text}</div>
		<button
			on:click={() => {
				// addMessage();
				toggleMode(todo.id);
			}}>수정</button
		>
	{/if}
	<button on:click={() => removeTodo(todo.id)}>삭제</button>
</li>

<style></style>
