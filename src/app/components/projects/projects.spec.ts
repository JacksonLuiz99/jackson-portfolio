import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects';

describe('ProjectsComponent', () => {
  it('previews six projects, expands the list and resets it when filters change', async () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelectorAll('figure img')).toHaveLength(3);
    expect(fixture.nativeElement.querySelectorAll('article')).toHaveLength(9);
    expect(fixture.nativeElement.querySelector('[aria-controls="project-list"]')).not.toBeNull();
    const petFriends = Array.from(
      fixture.nativeElement.querySelectorAll('#project-list article') as NodeListOf<HTMLElement>,
    ).find((article) => article.textContent?.includes('Pet Friends'));
    expect(petFriends).toBeDefined();
    expect(petFriends?.querySelectorAll('a')).toHaveLength(2);
    expect(petFriends?.querySelector('a[href*="pet-friends-seplag"]')).not.toBeNull();
    expect(petFriends?.querySelector('a[href*="vercel.app"]')).not.toBeNull();
    const helpdeskApi = Array.from(
      fixture.nativeElement.querySelectorAll('#project-list article') as NodeListOf<HTMLElement>,
    ).find((article) => article.textContent?.includes('Helpdesk — API'));
    expect(helpdeskApi?.querySelector('a[href*="helpdesk-backend"]')).not.toBeNull();

    fixture.componentInstance.toggleExpanded();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('article')).toHaveLength(19);

    fixture.componentInstance.setFilter('work');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('figure img')).toHaveLength(0);
    expect(fixture.nativeElement.querySelectorAll('article')).toHaveLength(6);

    fixture.componentInstance.toggleExpanded();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('article')).toHaveLength(10);

    fixture.componentInstance.setFilter('all');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('figure img')).toHaveLength(3);
    expect(fixture.nativeElement.querySelectorAll('article')).toHaveLength(9);
  });
});
