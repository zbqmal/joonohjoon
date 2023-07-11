import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/navigation";

const MenuTabs = () => {
  const router = useRouter();

  return (
    <Tabs orientation="vertical">
      <Tab label="Intro " onClick={() => router.push("/Intro")} />
      <Tab label="Coding" onClick={() => router.push("/Coding")} />
      <Tab label="Astronomy" onClick={() => router.push("/Astronomy")} />
      <Tab label="Football" onClick={() => router.push("/Football")} />
    </Tabs>
  );
};

export default MenuTabs;
