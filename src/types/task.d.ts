interface Task {
  id: string;
  label: string;
  done: boolean;
}

interface TaskContextData {
  tasks: Task[];
  addTask: (label: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  reorderTasks: (oldIndex: number, newIndex: number) => void;
}

//Criar o tipo que não precisa importar, já faz parte da aplicação
//Quando vc precisa realizar opeções ( | ) usamos o type
