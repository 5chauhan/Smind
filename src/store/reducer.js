const initState={
    dataArray:[],
    pageNumber:{start:0,end:10},
    graphData:[],
    

}
function stateReducer(state=initState, action) {
    switch(action.type) {
        case 'change_array':
            return {
                dataArray:action.value,
                pageNumber:state.pageNumber,
                graphData:state.graphData,
            }
        case 'graphData':
            return {
                dataArray:action.dataArray,
                pageNumber:state.pageNumber,
                graphData:action.value
            }
        case 'changePage':
            return {
                dataArray:action.dataArray,
                pageNumber:action.position,
                graphData:state.graphData
               }
        default:
            return state
    }
   
}

export default stateReducer;