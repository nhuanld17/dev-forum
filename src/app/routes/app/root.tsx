import { Outlet } from "react-router-dom";
import { AppLayout } from "src/components/layouts";
import { Button } from "src/components/ui";

export const AppRoot = () => {
    return (
       <AppLayout>
        <Button className={"text-orange-600"} variant={"filled"} size={"sm"} onClick={() => {console.log("dem")}}>Click Me</Button>
            <Outlet />
       </AppLayout>
    );
};