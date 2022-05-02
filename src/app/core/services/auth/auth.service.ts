import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import data from './users.json'
import {IUser} from "../../interfaces";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    users: IUser[] = [];

    constructor(public router: Router) {
        this.getUsersList();
    }

    login(user: IUser): boolean {
        const currentUser: IUser | undefined = this.users
            .find((item: IUser) => item.email === user.email && item.password === user.password);
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            return true;
        } else {
            return false;
        }
    }

    registration(user: IUser): void {
        user.id = this.users.length;
        this.users.push(user)
        localStorage.setItem('currentUser', user.toString());
    }

    getUsersList() {
        this.users = data.users;
    }

    user(): IUser | null {
        if (localStorage.getItem('currentUser')) {
            const currentUser: string | null = localStorage.getItem('currentUser');
            return JSON.parse(currentUser as string) as IUser;
        }
        return null;
    }

    logout(): void {
        localStorage.removeItem('currentUser');
    }
}
