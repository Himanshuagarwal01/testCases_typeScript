import { Button } from "@mui/material";
import React, { Component } from "react";

interface iState {
  isLoggedIn: boolean;
  isAdmin: boolean;
  role: string;
}

export default class NestedCondition extends Component<any, iState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isAdmin: false,
      role: "basic",
    };
  }

  handleClick = () => {
    this.setState({
      isLoggedIn: true,
      isAdmin: true,
    });
  };

  daysInMonth = (month: any, year: any) => {
    return new Date(year, month, 0).getDate();
  };

  getDaysInMonth(month: number, year: number) {
    const date = new Date(year, month - 1, 1);
    console.log("date", date, date.getMonth(), month);
    let days = [];
    let totalWeekDays = [];
    while (Number(date.getMonth()) + 1 === month) {
      // Exclude weekends
      const tmpDate = new Date(date);
      const weekDay = tmpDate.getDay(); // week day
      const day = tmpDate.getDate(); // day

      if (weekDay !== 0 && weekDay !== 6) {
        days.push(day);
      }
      if (weekDay === 2) {
        totalWeekDays.push(day);
      }
      date.setDate(date.getDate() + 1);
    }

    return [days.length, totalWeekDays.length];
  }

  GFG_Fun = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const totalDays = this.daysInMonth(month, year);
    const dayys = this.getDaysInMonth(month, year);
    console.log("daysy", dayys);
  };

  componentDidMount(): void {
    this.GFG_Fun();
  }
  render() {
    return (
      <div>
        <Button id="button" onClick={this.handleClick}>
          Change the ui
        </Button>
        <div>
          {this.state.isLoggedIn ? (
            <div>
              <p>Welcome, user!</p>
              {this.state.isAdmin ? (
                <>
                  <p>You are an admin.</p>
                  <Button
                    id="admin"
                    onClick={() => {
                      this.setState({
                        role: "admin",
                      });
                    }}
                  >
                    Admin
                  </Button>
                </>
              ) : (
                <p>You are not an admin.</p>
              )}
            </div>
          ) : (
            <p>Please log in to access the content.</p>
          )}
        </div>
      </div>
    );
  }
}
