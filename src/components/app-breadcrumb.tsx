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
import { Link } from "react-router-dom";

export const AppBreadcrumb = observer(({ color }: { color: string }) => {
  const breadcrumbStore = useBreadcrumbContext();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbStore.trail.map((item, index) => (
          <div key={index} className={`flex items-center ${color}`}>
            <BreadcrumbItem>
              {item.path ? (
                <BreadcrumbLink>
                  <Link to={item.path}>{item.label}</Link>
                </BreadcrumbLink>
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
