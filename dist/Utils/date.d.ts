import { Views } from "../Components/DatePickerProvider";
export declare const firstDateOfMonth: (selectedYear: number, selectedMonth: number, date: number) => number;
export declare const addDays: (date: number, amount: number) => number;
export declare const dayDiff: (day: number, from: number) => number;
export declare const dayOfTheWeekOf: (baseDate: number, dayOfWeek: number, weekStart?: number) => number;
export declare const addMonths: (date: Date, amount: number) => number;
export declare const addYears: (date: Date, amount: number) => number;
export declare const getFormattedDate: (language: string, date: Date | number, options?: Intl.DateTimeFormatOptions | null | undefined) => string;
export declare const goToPrevNext: (view: Views, date: Date, direction: number) => number;
export declare const startOfYearPeriod: (date: Date, years: number) => number;
//# sourceMappingURL=date.d.ts.map