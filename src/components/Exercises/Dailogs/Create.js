import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogContentText,
  DialogTitle,
  Button,
  Fab,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

const styles = theme => ({
  formControl: {
    width: 500
  }
});

export default withStyles(styles)(
  class Create extends Component {
    state = {
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };
    handleChange = name => ({ target: { value } }) => {
      this.setState({ exercise: { ...this.state.exercise, [name]: value } });
    };

    handleSubmit = () => {
      //TODO: validation
      const { exercise } = this.state;
      this.props.onCreate({
        ...exercise,
        id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
      });
      this.setState({
        open: false,
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
    };

    render() {
      const {
          open,
          exercise: { title, description, muscles }
        } = this.state,
        { classes, muscles: categories } = this.props;

      return (
        <Fragment>
          <Fab onClick={this.handleToggle} size="small" aria-label="add">
            <Add />
          </Fab>
          <Dialog
            open={open}
            onClose={this.handleToggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Create New Exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below.
              </DialogContentText>
              <form>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange("title")}
                  className={classes.formControl}
                />
                <br />
                <FormControl>
                  <InputLabel id="muscles">Muscles</InputLabel>
                  <Select
                    labelId="muscles"
                    value={muscles}
                    className={classes.formControl}
                    onChange={this.handleChange("muscles")}
                  >
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  label="Description"
                  value={description}
                  onChange={this.handleChange("description")}
                  multiline
                  rows="4"
                  className={classes.formControl}
                />
                <br />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="contained"
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
