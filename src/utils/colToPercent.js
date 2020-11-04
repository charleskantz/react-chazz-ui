import { GlobalTheme } from '../components/GlobalTheme/GlobalTheme';
import { chazzTheme } from '../components/GlobalTheme/theme';

export function colToPercent(cols) {
  if (!Number.isInteger(cols)) {
    throw new Error(`column value '${cols}' is not a valid integer`);
  }
  if (cols === chazzTheme.grid.columns) return '100%';
  return `${(cols / chazzTheme.grid.columns) * 100}%`;
}