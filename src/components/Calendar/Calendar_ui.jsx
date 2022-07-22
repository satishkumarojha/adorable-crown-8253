import React from 'react';
import './Calendar_ui.css';
import { Inject, Week, Day, WorkWeek, Month, Agenda, ScheduleComponent, RecurrenceEditor, ViewsDirective, ViewDirective, TimelineViews, TimelineMonth, DragAndDrop, Resize } from "@syncfusion/ej2-react-schedule"
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
const Calendar_ui = () => {
    const EventSettingModel = [
        //     {
        //     Id: 1,
        //     Subject: "Examination",
        //     StartTime: new Date(2018, 4, 8, 6, 0),
        //     EndTime: new Date(2018, 4, 8, 7, 0),
        //     Location: "School",
        //   },
        //   {
        //     Id: 2,
        //     Subject: "Modification",
        //     StartTime: new Date(2018, 4, 8, 7, 0),
        //     EndTime: new Date(2018, 4, 8, 7, 0),
        //     Location: "Yoga Center"
        //   }
    ];

    const treeViewData = [{
        id: 1,
        Name: 'Name1'
    },
    {
        id: 2,
        Name: 'Name2'
    }
        ,
    {
        id: 3,
        Name: 'Name3'
    },
]
    return (
        <>
           <div className='calendar-body'>
           <div className='sch-title'>Appointments </div>
            <div className='sch-component'>
                <ScheduleComponent
                    currentView='Month'
                    eventSettings={{ dataSource: EventSettingModel }}
                    selectedDate={new Date(2018, 1, 11)}
                >
                    <ViewsDirective>
                        <ViewDirective
                            option='Week'
                            displayName='2 WEEKS Only'
                            interval={2} />
                        <ViewDirective
                            option='Day'
                            displayName='3 Days Only'
                            interval={3}
                            startHour='03:00'
                            endHour='18:00'
                        />
                        <ViewDirective
                            option='Month'
                            showWeekNumber={true}
                            showWeekend={false}
                        />

                    </ViewsDirective>
                    <Inject services={[Week, Day, WorkWeek, Month, Agenda, TimelineMonth, TimelineViews, DragAndDrop, Resize]} />
                </ScheduleComponent>
            </div>
            <div className="tree-title">Appointments List</div>
            <TreeViewComponent allowDragAndDrop={true} fields={{dataSource:treeViewData, id: 'id', text : 'Name'}} />
           </div>
        </>
    )
}

export default Calendar_ui