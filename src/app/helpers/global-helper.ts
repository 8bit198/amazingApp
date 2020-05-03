export class GlobalHelper {
  isTabActive(targetTab: string, currentTab: string, cssClass: string): string {
    return targetTab === currentTab ? cssClass : '';
  }
}