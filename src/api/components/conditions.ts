import ProComponent              from "./procomponent";
import { YAMLObject }            from "../yaml";
import type ComponentOption      from "../options/options";
import type { ComponentData } from "$api/types";
import Registry               from "$api/components/registry";

export default class ProCondition extends ProComponent {
  iconKey = "";
  public constructor(data: ComponentData) {
    super("condition", data);
  }

  public override toYamlObj(): YAMLObject {
    const parent: YAMLObject = super.toYamlObj();
    const data               = this.getData();
    if (data.getKeys().length > 0) parent.put("data", data);
    if (this.components.length > 0)
      parent.put("children", this.components);

    return parent;
  };

  public override getData(): YAMLObject {
    const data = new YAMLObject("data");

    data.put("icon-key", this.iconKey);

    this.data.forEach((opt: ComponentOption) => {
      const optData: { [key: string]: string } = opt.getData();
      Object.keys(optData).forEach(key => data.put(key, optData[key]));
    });

    return data;
  }

  public override deserialize(yaml: YAMLObject): void {
    const data = yaml.get<YAMLObject, YAMLObject>("data");

    this.iconKey = data.get("icon-key");

    if (data) this.data.forEach((opt: ComponentOption) => opt.deserialize(data));

    this.components = yaml.get<YAMLObject, ProComponent[]>("children", [], (obj) => Registry.deserializeComponents(obj));
  }

  public static override new = (): ProCondition => new ProCondition({ name: "null" });
}