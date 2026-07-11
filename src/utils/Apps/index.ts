import Gio from "gi://Gio?version=2.0";
import { BLACKLISTED_IDS, SYSTEM_ONLY_CATEGORIES } from "../../constans";

export const apps = Gio.AppInfo.get_all()
    .filter((app) => {

        if (!app.should_show() || BLACKLISTED_IDS.has(app.get_id() ?? "")) {
            return false;
        }
        const desktopApp = app as Gio.DesktopAppInfo;

        if (desktopApp.get_boolean?.("Terminal")) return false;

        const categoriesStr = desktopApp.get_categories?.() ?? "";
        if (!categoriesStr) return true;

        const categories = categoriesStr.split(";").filter(Boolean);

        return !categories.every((cat: string) => SYSTEM_ONLY_CATEGORIES.has(cat));
    })
    .map((app) => ({
        name: app.get_name() ?? "",
        appInfo: app,
    }));
