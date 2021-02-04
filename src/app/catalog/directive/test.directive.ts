import {Attribute, Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[blue]'
})
export class TestDirective {

  @Input()
  blue : string;

  @HostBinding('style.width') width = '500px';
  @HostBinding('style.background-color') color = '#bdbdda';

  @HostBinding() get innerText() {
    debugger;
    return this.blue;
  }

  @HostListener('click',['$event'])
  click($event){
    alert("点击");
  }

  constructor(@Attribute('id') public id: string) {
    alert("获取的id为" + id);
  }

}
