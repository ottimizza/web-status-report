import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollTracker]'
})
export class ScrollTrackerDirective {
  @Output() scrollEnd: EventEmitter<boolean> = new EventEmitter();

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    const target = event.target;
    const limit = target.scrollHeight - target.clientHeight;

    alert(target.scrollTop === limit);

    if (target.scrollTop === limit) {
      this.scrollEnd.emit(true);
    }
  }
}
