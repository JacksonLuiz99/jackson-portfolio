import { TestBed } from '@angular/core/testing';
import { TechLabelComponent } from './tech-label';

describe('TechLabelComponent', () => {
  it('keeps the technology name visible beside a decorative icon', () => {
    const fixture = TestBed.createComponent(TechLabelComponent);
    fixture.componentRef.setInput('label', 'Angular 22');
    fixture.detectChanges();

    const label = fixture.nativeElement as HTMLElement;
    const icon = label.querySelector('img');
    expect(label.textContent).toContain('Angular 22');
    expect(icon?.getAttribute('src')).toBe('tech-icons/angular.svg');
    expect(icon?.getAttribute('alt')).toBe('');
  });

  it('shows practices without a decorative technology icon', () => {
    const fixture = TestBed.createComponent(TechLabelComponent);
    fixture.componentRef.setInput('label', 'SDD');
    fixture.detectChanges();

    const label = fixture.nativeElement as HTMLElement;
    expect(label.textContent).toContain('SDD');
    expect(label.querySelector('img')).toBeNull();
  });
});
