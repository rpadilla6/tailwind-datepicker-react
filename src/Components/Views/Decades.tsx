import React, { useContext } from "react"
import { addYears, startOfYearPeriod } from "../../Utils/date"
import { DatePickerContext } from "../DatePickerProvider"
import { twMerge } from "tailwind-merge"
import { menuButtons, shared } from "../../config/styles"

const Decades = () => {
	const { selectedDate, showSelectedDate, changeSelectedDate, setView, getFormattedDate, options } = useContext(DatePickerContext)
	return (
		<div className="grid w-64 grid-cols-4">
			{[...Array(12)].map((_year, index) => {
				const first = startOfYearPeriod(selectedDate, 100)
				const year = first - 10 + index * 10
				return (
					<button
						key={index}
						type="button"
						aria-label={`${year}`}
						className={`${menuButtons.default} ${
							showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, { year: "numeric" })) === year
								? twMerge(menuButtons.selected, options?.theme?.selected)
								: menuButtons.unselected
						} ${index == 0 || index == 11 ? twMerge(shared.disabled, options?.theme?.disabledText) : twMerge(shared.text, options?.theme?.text)}
                            ${options?.minDate && year < Number(getFormattedDate(options?.minDate, { year: "numeric" })) ? twMerge(shared.disabled, options?.theme?.disabledText) : ""}
                            ${options?.maxDate && year > Number(getFormattedDate(options?.maxDate, { year: "numeric" })) ? twMerge(shared.disabled, options?.theme?.disabledText) : ""}
                            `}
						onClick={() => {
							changeSelectedDate("date", new Date(addYears(selectedDate, year - selectedDate.getFullYear())))
							setView("years")
						}}
					>
						{year}
					</button>
				)
			})}
		</div>
	)
}

export default Decades
