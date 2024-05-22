export function formatFileSize(size: number): string {
  const i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024))
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  return parseFloat((size / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i]
}
