export type TodoMode = 'edit' | 'view';

export type Todo = {
	checked: boolean;
	text: string;
	id: number;
	mode: TodoMode;
};
