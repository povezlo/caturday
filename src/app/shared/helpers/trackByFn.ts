export function trackByIndexFn(index: number, user: { id: number | string }): number | string {
  return user.id;
}
