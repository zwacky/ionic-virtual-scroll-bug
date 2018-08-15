import { Component } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";

interface Message {
  text: string;
  userName: string;
}

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  private initState: Message[] = [
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" },
    { userName: "init", text: "random msg" }
  ];
  // messages: Message[] = this.initState.concat();

  private state$ = new BehaviorSubject(this.initState);
  messages$: Observable<Message[]> = this.state$.asObservable();

  constructor() {
    of(1000, 2000, 3000, 4000, 5000).subscribe(delay => {
      // delayed add of new messages
      setTimeout(() => {
        const values = this.state$.getValue();
        const newState = [
          {
            text: `message delayed: ${delay}`,
            userName: "random"
          }
        ].concat(values);
        this.state$.next(newState);

        console.log("added new value. total messages: ", values.length);

        // // also works with simple arrays
        // this.messages = [{text: 'lulzy', userName: 'something'}].concat(this.messages);
      }, delay);
    });
  }
}
