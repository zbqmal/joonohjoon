import { Tab, Tabs } from "@mui/material";

const MenuTabs = () => {
  return (
    <Tabs orientation="vertical">
      <Tab label="Intro" />
      <Tab label="Coding" />
      <Tab label="Astronomy" />
      <Tab label="Football" />
    </Tabs>
  );
};

export default MenuTabs;
