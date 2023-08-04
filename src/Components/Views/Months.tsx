import React, { useContext } from "react"
import { addMonths } from "../../Utils/date"
import { DatePickerContext } from "../DatePickerProvider"
import { twMerge } from "tailwind-merge"
import { menuButtons, shared } from "../../config/styles"

const Months = () => {
	const { selectedDate, showSelectedDate, changeSelectedDate, getFormattedDate, setView, options } = useContext(DatePickerContext)
	return (
		<div className="grid w-64 grid-cols-4">
			{[...Array(12)].map((_month, index) => {
				const month = getFormattedDate(new Date(selectedDate.getFullYear(), index), { month: "short" })
				return (
					<button
						key={index}
						type="button"
						aria-label={month}
						className={`${menuButtons.default} ${
							showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate, { month: "short" }) === month
								? twMerge(menuButtons.selected, options?.theme?.selected)
								: menuButtons.unselected
						} ${twMerge(shared.text, options?.theme?.text)}`}
						onClick={() => {
							changeSelectedDate("date", new Date(addMonths(selectedDate, index - selectedDate.getMonth())))
							setView("days")
						}}
					>
						{month}
					</button>
				)
			})}
		</div>
	)
}

export default Months
