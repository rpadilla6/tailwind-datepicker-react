import React, { useContext } from "react"
import { addDays } from "../../Utils/date"
import { DatePickerContext } from "../DatePickerProvider"
import { twMerge } from "tailwind-merge"
import { shared } from "../../config/styles"

interface IDaysProps {
	start: number
}

const Days = ({ start }: IDaysProps) => {
	const { selectedDate, changeSelectedDate, showSelectedDate, getFormattedDate, options } = useContext(DatePickerContext)

	const startOfWeek = (new Date(start).getDay() + 6) % 7
	const weekDays = options.weekDays || []
	const sortedWeekDays = weekDays.slice(startOfWeek).concat(weekDays.slice(0, startOfWeek))

	return (
		<>
			<div className="grid grid-cols-7 mb-1">
				{sortedWeekDays.map((day, index) => (
					<span key={index} className="h-6 text-sm font-medium leading-6 text-center text-gray-900 dow dark:text-dark-gray-25">
						{day}
					</span>
				))}
			</div>
			<div className="grid w-64 grid-cols-7">
				{[...Array(42)].map((_date, index) => {
					const current = addDays(start, index)
					const day = getFormattedDate(current, { day: "numeric" })
					const month = getFormattedDate(current, { month: "long" })
					const year = getFormattedDate(current, { year: "numeric" })
					const defaultFocused = "hover:bg-blue-50 dark:hover:bg-dark-gray-700 focus:bg-blue-50 focus:dark:bg-dark-gray-700 hover:text-blue-600 focus:text-blue-600 "
					const defaultSelected = "bg-blue-600 !text-white dark:!text-dark-gray-900 hover:bg-blue-700 focus:bg-blue-700 hover:dark:bg-blue-400 focus:dark:bg-blue-400 dark:!bg-blue-300"
					return (
						<button
							key={index}
							type="button"
							aria-label={day}
							className={`bg-white dark:bg-dark-gray-900 outline-none block flex-1 leading-9 border-0 rounded-full text-center font-normal [font-size:14px] ${
								showSelectedDate && selectedDate.getTime() > 0 && getFormattedDate(selectedDate) === getFormattedDate(current) ? twMerge(defaultSelected, options?.theme?.selected) : defaultFocused
							} ${
								month == getFormattedDate(selectedDate, { month: "long" }) && year == getFormattedDate(selectedDate, { year: "numeric" })
									? twMerge(shared.text, options?.theme?.text)
									: twMerge(shared.disabled, options?.theme?.disabledText)
							} ${
								(options?.minDate && new Date(current) < options?.minDate) || (options?.disabledDates && options.disabledDates.indexOf(new Date(current)) >= 0)
									? twMerge(shared.disabled, options?.theme?.disabledText)
									: ""
							} ${
								(options?.maxDate && new Date(current) > options?.maxDate) || (options?.disabledDates && options.disabledDates.indexOf(new Date(current)) >= 0)
									? twMerge(shared.disabled, options?.theme?.disabledText)
									: ""
							}
                            `}
							onClick={() => {
								changeSelectedDate("date", new Date(current))
							}}
						>
							{day}
						</button>
					)
				})}
			</div>
		</>
	)
}

export default Days
