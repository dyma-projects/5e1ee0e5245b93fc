import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  addUser(user: string): void {
    const currentValue = this.users.value;
    this.users.next(currentValue.concat(user));
  }
}
