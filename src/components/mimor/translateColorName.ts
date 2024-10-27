export function translateColorName(name: string): string {
  const names = chineseColorNames()
  return names[name] || name
}

function chineseColorNames(): Record<string, string> {
  return {
    白: 'white',
    红: 'red',
    赤: 'red',
    橙: 'orange',
    黄: 'yellow',
    绿: 'green',
    蓝: 'blue',
    青: 'blue',
    靛: 'indigo',
    紫: 'purple',
    墨: 'stone',
  }
}
