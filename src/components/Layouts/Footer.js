import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default function Footer({ muscles, category, onSelect }) {
  return (
    <Paper>
      <Tabs
        value={0}
        onChange={}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab label={group} />
        ))}
      </Tabs>
    </Paper>
  );
}
