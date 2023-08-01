import React, { useContext } from "react"
import { addYears, startOfYearPeriod } from "../../Utils/date"
import { DatePickerContext } from "../DatePickerProvider"
import { twMerge } from "tailwind-merge"
import { menuButtons, shared } from "../../config/styles"

const Years = () => {
	const { selectedDate, showSelectedDate, changeSelectedDate, setView, getFormattedDate, options } = useContext(DatePickerContext)
	return (
		<div className="grid w-64 grid-cols-4">
			{[...Array(12)].map((_year, index) => {
				const first = startOfYearPeriod(selectedDate, 10)
				const year = first - 1 + index * 1
				return (
					<button
						aria-label={`${year}`}
						key={index}
						className={`${menuButtons.default} ${
							showSelectedDate && selectedDate.getTime() > 0 && Number(getFormattedDate(selectedDate, { year: "numeric" })) === year
								? twMerge(menuButtons.selected, options?.theme?.selected)
								: menuButtons.unselected
						} ${index == 0 || index == 11 ? twMerge(shared.disabled, options?.theme?.disabledText) : twMerge(shared.text, options?.theme?.text)}`}
						onClick={() => {
							changeSelectedDate("date", new Date(addYears(selectedDate, year - selectedDate.getFullYear())))
							setView("months")
						}}
					>
						{year}
					</button>
				)
			})}
		</div>
	)
}

export default Years
