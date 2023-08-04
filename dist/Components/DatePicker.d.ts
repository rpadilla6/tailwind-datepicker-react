import React, { ReactElement, ReactNode, Dispatch, SetStateAction } from "react";
import { IOptions } from "../Options";
export interface IDatePickerProps {
    children?: ReactElement | ReactNode;
    options?: IOptions;
    onChange?: (date: Date) => void;
    show: boolean;
    setShow: (show: boolean) => void;
    classNames?: string;
    selectedDateState?: [Date, (date: Date) => void];
    showSelecteDateState?: [boolean, Dispatch<SetStateAction<boolean>>];
    style?: React.CSSProperties;
}
declare const DatePicker: React.ForwardRefExoticComponent<IDatePickerProps & React.RefAttributes<HTMLDivElement>>;
export default DatePicker;
//# sourceMappingURL=DatePicker.d.ts.map