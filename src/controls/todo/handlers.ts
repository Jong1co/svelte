import type { Todo } from './types';

const getInitialTodo = ({ text }: { text: string }): Todo => ({
	checked: false,
	text: text,
	id: Math.random(),
	mode: 'view'
});

const add = (list: Todo[], text: string): Todo[] => {
	return [...list, getInitialTodo({ text })];
};

const remove = (list: Todo[], id: number): Todo[] => {
	return list.filter((item) => item.id !== id);
};

const update = (list: Todo[], id: number, text: string): Todo[] => {
	return list.map((item) => (item.id === id ? { ...item, text } : item));
};

const toggleCheck = (list: Todo[], id: number): Todo[] => {
	return list.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
};

const toggleMode = (list: Todo[], id: number): Todo[] => {
	return list.map((item) =>
		item.id === id ? { ...item, mode: item.mode === 'edit' ? 'view' : 'edit' } : item
	);
};

export const todoHandlers = {
	add,
	remove,
	update,
	toggleCheck,
	toggleMode
};
