import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday } from "date-fns"
import { cn } from "../lib/utils"


interface CalendarProps {
  selected?: Date
  onSelect?: (date: Date) => void
  className?: string
  classNames?: {
    months?: string
    month?: string
    caption?: string
    caption_label?: string
    nav?: string
    nav_button?: string
    nav_button_previous?: string
    nav_button_next?: string
    table?: string
    head_row?: string
    head_cell?: string
    row?: string
    cell?: string
    day?: string
    day_selected?: string
    day_today?: string
    day_disabled?: string
  }
}

const Calendar: React.FC<CalendarProps> = ({
  selected,
  onSelect,
  className,
  classNames,
}) => {
  const [currentMonth, setCurrentMonth] = Reac.useState(new Date())

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const days = []
  const startDay = monthStart.getDay()
  
  // Add empty cells for days before the start of the month
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className={cn("h-9 w-9", classNames?.cell)} />)
  }

  // Add days of the month
  daysInMonth.forEach((day) => {
    const isSelected = selected && isSameDay(day, selected)
    const isCurrentDay = isToday(day)
    
    days.push(
      <button
        key={day.toString()}
        className={cn(
          "h-9 w-9 p-0 rounded-md flex items-center justify-center",
          classNames?.day,
          isSelected && cn("bg-primary text-primary-foreground", classNames?.day_selected),
          isCurrentDay && !isSelected && cn("bg-accent text-accent-foreground", classNames?.day_today),
          "hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
        onClick={() => onSelect?.(day)}
      >
        {format(day, 'd')}
      </button>
    )
  })

  return (
    <div className={cn("p-3", className)}>
      <div className={cn("flex justify-between items-center mb-4", classNames?.caption)}>
        <button
          onClick={prevMonth}
          className={cn(
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
            classNames?.nav_button,
            classNames?.nav_button_previous
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <h2 className={cn("text-sm font-medium", classNames?.caption_label)}>
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          onClick={nextMonth}
          className={cn(
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
            classNames?.nav_button,
            classNames?.nav_button_next
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      
      <div className={cn("grid grid-cols-7 gap-1", classNames?.table)}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div
            key={day}
            className={cn(
              "text-muted-foreground rounded-md w-9 font-normal text-xs flex items-center justify-center",
              classNames?.head_cell
            )}
          >
            {day}
          </div>
        ))}
        {days}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }