import React, { ReactElement, ReactNode } from "react";
import { IOptions } from "../Options";
export interface IDatePickerProps {
    children?: ReactElement | ReactNode;
    options?: IOptions;
    onChange?: (date: Date) => void;
    show: boolean;
    setShow: (show: boolean) => void;
    classNames?: string;
    selectedDateState?: [Date, (date: Date) => void];
    style?: React.CSSProperties;
}
declare const DatePicker: React.ForwardRefExoticComponent<IDatePickerProps & React.RefAttributes<HTMLDivElement>>;
export default DatePicker;
//# sourceMappingURL=DatePicker.d.ts.map