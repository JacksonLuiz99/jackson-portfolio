import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects';

describe('ProjectsComponent', () => {
  it('shows three illustrated case studies only in the full project view', async () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelectorAll('figure img')).toHaveLength(3);
    expect(fixture.nativeElement.querySelectorAll('article')).toHaveLength(17);

    fixture.componentInstance.setFilter('work');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('figure img')).toHaveLength(0);
    expect(fixture.nativeElement.querySelectorAll('article')).toHaveLength(9);

    fixture.componentInstance.setFilter('all');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('figure img')).toHaveLength(3);
    expect(fixture.nativeElement.querySelectorAll('article')).toHaveLength(17);
  });
});
