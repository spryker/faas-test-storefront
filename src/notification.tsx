import useNotifications from "@/store/notifications";
import {Actions} from "@/store/notifications/types";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import {createRef} from "react";
import {render} from 'lit-html';

export class PWANotificationService  {
  protected notificationsActions?: Actions;

  protected elementRef = createRef<HTMLDivElement>();
  protected titleRef = createRef<HTMLDivElement>();

  get(): any {}

  push(strategy: any): any {
      this.notificationsActions?.push({
        options: {
          content: (
            <Alert severity="info">
              <AlertTitle ><span ref={this.titleRef}></span></AlertTitle>
              <div ref={this.elementRef} />
            </Alert>
          ),
        },
      });

    setTimeout(() => {
      render(strategy.content, this.elementRef.current!);
      render(strategy.subtext, this.titleRef.current!);
    }, 50);
  }

  initialize() {
    if (!this.notificationsActions) {
      const [, notificationsActions] = useNotifications();
      this.notificationsActions = notificationsActions;
    }
  }

}
