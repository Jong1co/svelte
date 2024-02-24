<script lang="ts">
	import { type Todo } from '../controls/todo/types';
	import { todoHandlers } from '../controls/todo/handlers';
	import TodoItem from '../components/todoItem.svelte';
	import { afterUpdate, beforeUpdate } from 'svelte';

	let todoList: Todo[] = [];
	let text = '';

	let textarea = '';

	const handleTextarea = (e: KeyboardEvent) => {
		console.log((e.target as HTMLTextAreaElement).value);
		// textarea = (e.target as HTMLTextAreaElement).value;
	};

	$: console.log(textarea);

	const addTodo = () => {
		todoList = todoHandlers.add(todoList, text);
		text = '';
	};

	const removeTodo = (id: number) => {
		todoList = todoHandlers.remove(todoList, id);
	};

	const toggleMode = (id: number) => {
		todoList = todoHandlers.toggleMode(todoList, id);
	};

	const addMessage = (e: CustomEvent<{ message: string }>) => {
		alert(e.detail.message);
	};

	// beforeUpdate(() => {
	// 	console.log('beforeUpdate');
	// });

	// afterUpdate(() => {
	// 	console.log('afterUpdate');
	// });

	$: console.log(todoList);
</script>

<input bind:value={text} />
<button on:click={addTodo}>추가</button>
<div>{text}</div>
{#each todoList as todo}
	<TodoItem {...{ todo, toggleMode, removeTodo }} on:add={addMessage} />
{/each}

<textarea value={textarea} cols="30" rows="10" on:keydown={handleTextarea} />

<style>
</style>
