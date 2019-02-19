import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ThemeType {
    background?: string;
}


@Injectable()

export class CustomThemeService {
    private initStyle: ThemeType = {
        background: 'pink'
    };

    private style = new BehaviorSubject(this.initStyle);

    setTheme (data: ThemeType): void {
        this.style.next(data);
        this.style.complete();
    }

    getTheme(): Observable<ThemeType> {
        return this.style;
    }

}
