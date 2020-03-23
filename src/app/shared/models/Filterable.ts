import { SearchOption } from '@shared/components/search/models/SearchOption';
import { SearchRule } from '@shared/components/search/models/SearchRule';
import { HackingRule } from '@shared/components/search/models/HackingRule';

export interface Filterable<T> {
  dataSource: T[];
  filters: SearchOption[];
  defaultRule: SearchRule;
  filterApply(event: SearchOption): void;
  removeFilter(filter: SearchOption): void;
  hackings(): HackingRule[];
}
