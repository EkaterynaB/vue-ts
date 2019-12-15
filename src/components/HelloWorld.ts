import { Component, Vue } from "vue-property-decorator";
import WithRender from "./hello-world.html";

@WithRender
@Component
export default class HelloWorld extends Vue {
  public msg: string = "What am I doing WRONG?";
}
