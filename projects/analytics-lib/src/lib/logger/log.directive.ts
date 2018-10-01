import { Directive, ElementRef, ViewContainerRef, OnInit, Renderer2, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[bdLogger], [bd-logger]',
})
export class LoggerDirective implements OnInit, OnDestroy {

  /**
   * Event Reference array to unbind the events after removing logger
   */
  private _eventReference: any[] = [];
  set eventReference(event: any) {
    this._eventReference.push(event);
  }
  get eventReference(): any {
    return this._eventReference;
  }

  /**
   * Reference to native HTMLElement
   * @instance
   * @kind HTMLElement
   */
  private _element: HTMLElement;
  set element(element: HTMLElement) {
    this._element = element;
  }
  get element(): HTMLElement {
    return this._element;
  }

  private _events: any[];
  @Input('log') set log(events: any) {
    events = events.replace(/'/g, '"');
    const data = _parseJSON(events);
    this._events = data ? data : [];
  }

  get events(): any[] {
    return this._events;
  }

  constructor(
    private vcr: ViewContainerRef,
    private renderer: Renderer2
  ) {
    this.element = vcr.element.nativeElement;
  }

  ngOnInit(): void {
    this.events.forEach(event => {
      this.eventReference = this.renderer.listen(this.element, event, () => {
        console.log(event);
      });
    });
  }

  ngOnDestroy(): void {
    this.eventReference.forEach(unbind => unbind());
  }

  /**
   * Attaches label element as a shadow dom to show logging information
   * @param element
   */
  private attachHighlightLabel(element: HTMLElement) {
    const labelText = this.renderer.createText(['click'].join(', '));
    // this.renderer.appendChild(labelContainer, labelText);
    const label = this.renderer.createElement('span').attachShadow({
      mode: 'closed'
    });
    label.appendChild(labelText);
    //    this.renderer.addClass(label, 'debug-analytics-label');
    this.renderer.appendChild(element, label);
  }

}

/**
   * Checks if value is parsable JSON string
   * and returns the parsed string if it is,
   * otherwise returns false.
   * @param value
   * @returns prased json object or boolean
   */
export function _parseJSON(value: string): any {
  try {
    const json = JSON.parse(value);
    if (json && typeof json === 'object') {
      return json;
    }
  } catch (e) {
    //    console.log('error while parsing JSON: ', e);
  }
  return false;
}
