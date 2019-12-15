import { Component, Vue } from "vue-property-decorator";
import WithRender from "./to-do.html";
import ToDoForm from "../to-do-form/ToDoForm";
import ToDoItem from "../to-do-item/ToDoItem";
import Task from "@/types/Task";

@WithRender
@Component({
  components: {
    "to-do-form": ToDoForm,
    "to-do-item": ToDoItem
  }
})
export default class ToDo extends Vue {
  public tasks: Task[] = [
    { description: "Make Coffee", completed: false },
    { description: "Feed Dragons", completed: true },
    { description: "Make Coffee", completed: true },
    { description: "Feed Dragons", completed: true }
  ];

  public addTask(description: string): void {
    this.tasks.push({ description, completed: false });
  }

  public completedTask(taskIndex: number): void {
    console.log({taskIndex});
    this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
  }
}
