import { Title } from "./Primitives/Title";
import { colorForItemAtPath } from "~/utilities/colors";
import { IconComponent } from "~/useColumnView";
import { useJson } from "../hooks/useJson";

export type ColumnProps = {
  id: string;
  title: string;
  icon?: IconComponent;
  children: React.ReactNode;
};

export function Column(column: ColumnProps) {
  const { id, title, children } = column;
  const [json] = useJson();
  const iconColor = colorForItemAtPath(id, json);
  return (
    <div
      className={
        "column flex-none border-r-[1px] border-slate-300 w-80 transition dark:border-slate-600"
      }
    >
      <div className="flex text-slate-800 bg-slate-50 mb-[3px] p-2 pb-0 transition dark:bg-slate-900 dark:text-slate-300">
        {column.icon && <column.icon className={`${iconColor} h-6 w-6 mr-1`} />}
        <Title className="">{title}</Title>
      </div>
      <div className="overflow-y-auto h-viewerHeight no-scrollbar">
        {children}
      </div>
    </div>
  );
}