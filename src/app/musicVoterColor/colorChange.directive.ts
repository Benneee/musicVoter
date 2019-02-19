import { Directive, ElementRef, Input, OnInit, Renderer2, HostListener } from '@angular/core';
import { CustomThemeService, ThemeType } from '../Services/customtheme.service';
import { Observable } from 'rxjs';


@Directive ({
  selector : '[appColorChange]',
  providers: [CustomThemeService]
})

export class ColorDirective implements OnInit {
  @Input() pageColor = 'pink';
 	style: Observable<ThemeType>;

 	constructor(
 	private elRef: ElementRef,
	private renderer: Renderer2,
	private themeService: CustomThemeService   ) {
 		this.style = themeService.getTheme();
 	}

 	ngOnInit() {
 		this.renderer.setStyle(this.elRef.nativeElement, 'background', this.style);
 	}
}
