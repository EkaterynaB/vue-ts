import { Component, Vue, Prop } from "vue-property-decorator";
import WithRender from "./to-do-item.html";

@WithRender
@Component
export default class ToDoItem extends Vue {
  // @Prop({ description: String, completed: Boolean }) readonly description!: string;
  @Prop(String) readonly description!: string;
  @Prop({ type: Boolean, default: false }) readonly completed!: boolean;
  @Prop(Number) readonly index!: number;

  public completedTask(index: number):void {
    console.log(index);
    this.$emit("completed", index);
  }
}
