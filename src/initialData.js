const initialData = {
    tasks : {
        'task-1' : {id:'task-1',content:'USER'},
        'task-2' : {id:'task-2',content:'TOURNAMENT'},
        'task-3' : {id:'task-3',content:'TEAMS'},
        'task-4' : {id:'task-4',content:'PLAYER'},
        'task-5' :{id:'task-5',content:'Parth MOTO'}
    },
    columns:{
        'column-1':{
            id:'column-1',
            title:'Models',
            taskIds:['task-1','task-2','task-3','task-4']
        },
        'column-2':{
            id:'column-2',
            title:'SPRINT 1(24FEB - 29FEB)',
            taskIds:['task-5']
        }
    },
    columnOrder:['column-1','column-2'],
}

export default initialData