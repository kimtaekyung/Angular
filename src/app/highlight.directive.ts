import { Directive, ElementRef, Renderer2 } from '@angular/core';

/*디렉티브*/
/*UI 공통 효과를 주기 위해서 사용할듯.*/
@Directive({
  selector: '[appHighlight]'
})

/**[appHighlight] 라는 속성이들어간 요소에 공통 적용 */
export class HighlightDirective {
  constructor(el: ElementRef, renderer2: Renderer2) {
    renderer2.setStyle(el.nativeElement, 'color', 'grey');
   }

}
