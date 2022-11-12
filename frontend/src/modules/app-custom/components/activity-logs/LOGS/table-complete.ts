import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivityLog } from './activity-log';
import { ActivityLogService } from './activity-log.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

@Component({
	selector: 'ngbd-table-complete',
	templateUrl: './table-complete.html',
	providers: [ActivityLogService, DecimalPipe],
})
export class NgbdTableComplete {
	logs$: Observable<ActivityLog[]>;
	total$: Observable<number>;

	@ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

	constructor(public service: ActivityLogService) {
		this.logs$ = service.act_logs$;
		this.total$ = service.total$;
	}

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
}
