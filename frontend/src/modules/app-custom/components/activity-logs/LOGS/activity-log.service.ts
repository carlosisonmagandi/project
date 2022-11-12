/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { ActivityLog } from './activity-log';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { ACTIVITTYLOGS } from './activity-logs';

interface SearchResult {
	act_logs: ActivityLog[];
	total: number;
}

interface State {
	page: number;
	pageSize: number;
	searchTerm: string;
	sortColumn: SortColumn;
	sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(act_logs: ActivityLog[], column: SortColumn, direction: string): ActivityLog[] {
	if (direction === '' || column === '') {
		return act_logs;
	} else {
		return [...act_logs].sort((a, b) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}

function matches(log: ActivityLog, term: string, pipe: PipeTransform) {
	return (
		log.name.toLowerCase().includes(term.toLowerCase()) ||
		pipe.transform(log.area).includes(term) ||
		pipe.transform(log.population).includes(term)
	);
}

@Injectable({ providedIn: 'root' })
export class ActivityLogService {
	private _loading$ = new BehaviorSubject<boolean>(true);
	private _search$ = new Subject<void>();
	private _act_logs$ = new BehaviorSubject<ActivityLog[]>([]);
	private _total$ = new BehaviorSubject<number>(0);

	private _state: State = {
		page: 1,
		pageSize: 10,
		searchTerm: '',
		sortColumn: '',
		sortDirection: '',
	};

	constructor(private pipe: DecimalPipe) {
		this._search$
			.pipe(
				tap(() => this._loading$.next(true)),
				debounceTime(200),
				switchMap(() => this._search()),
				delay(200),
				tap(() => this._loading$.next(false)),
			)
			.subscribe((result) => {
				this._act_logs$.next(result.act_logs);
				this._total$.next(result.total);
			});

		this._search$.next();
	}

	get act_logs$() {
		return this._act_logs$.asObservable();
	}
	get total$() {
		return this._total$.asObservable();
	}
	get loading$() {
		return this._loading$.asObservable();
	}
	get page() {
		return this._state.page;
	}
	get pageSize() {
		return this._state.pageSize;
	}
	get searchTerm() {
		return this._state.searchTerm;
	}

	set page(page: number) {
		this._set({ page });
	}
	set pageSize(pageSize: number) {
		this._set({ pageSize });
	}
	set searchTerm(searchTerm: string) {
		this._set({ searchTerm });
	}
	set sortColumn(sortColumn: SortColumn) {
		this._set({ sortColumn });
	}
	set sortDirection(sortDirection: SortDirection) {
		this._set({ sortDirection });
	}

	private _set(patch: Partial<State>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}

	private _search(): Observable<SearchResult> {
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

		// 1. sort
		let act_logs = sort(ACTIVITTYLOGS, sortColumn, sortDirection);

		// 2. filter
		act_logs = act_logs.filter((log) => matches(log, searchTerm, this.pipe));
		const total = act_logs.length;

		// 3. paginate
		act_logs = act_logs.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		return of({ act_logs, total });
	}
}
