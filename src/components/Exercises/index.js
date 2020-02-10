import React from "react";
import { Grid, Paper } from "@material-ui/core";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default props => (
  <Grid container sm>
    <Grid item sm>
      <Paper style={styles.Paper}>Left</Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>Right</Paper>
    </Grid>
  </Grid>
);
