import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {
  @Input('appFontSize') fontSize: HTMLInputElement;

  private el:HTMLElement;

  constructor(el:ElementRef) { 
    this.el = el.nativeElement;
  }

  @HostListener('click') onClick(){
    this.changeFontSize(this.fontSize.value || "15");
  }

  private changeFontSize(size: string){
    let fontSize = Number(size)
    
    if(fontSize < 15)
      fontSize = 15;
    if(fontSize > 80)
      fontSize = 15;
    this.el.style.fontSize = fontSize+"px";
    this.el.innerText = "Add new object " + fontSize + "px";
  }

}
