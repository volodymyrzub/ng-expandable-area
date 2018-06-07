import { Component, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'ng-expandable-area',
  templateUrl: './expandable-area.component.html',
  styleUrls: ['./expandable-area.component.scss']
})
export class ExpandableAreaComponent implements OnInit {
  @Input() public title: string;
  @Input() public opened: boolean;

  constructor(
    private _elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  public ngOnInit(): void {
    if (this.opened) {
      this.show();
    }
  }

  public showArea() {
    if (this._elementRef.nativeElement.classList.contains('active')) {
      this.hide();
    } else {
      this.show();
    }
  }

  private show() {
    this.renderer.addClass(this._elementRef.nativeElement, 'active');
  }

  private hide() {
    this.renderer.removeClass(this._elementRef.nativeElement, 'active');
  }

}
