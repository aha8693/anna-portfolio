import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumbContext } from "@/hooks/useBreadcrumbContext";
import { observer } from "mobx-react-lite";

export const AppBreadcrumb = observer(({ color }: { color: string }) => {
  const breadcrumbStore = useBreadcrumbContext();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbStore.trail.map((item, index) => (
          <div key={index} className={`flex items-center ${color}`}>
            <BreadcrumbItem>
              {item.path ? (
                <BreadcrumbLink href={item.path}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < breadcrumbStore.trail.length - 1 && (
              <BreadcrumbSeparator />
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
});
